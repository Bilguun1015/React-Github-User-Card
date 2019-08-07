import React from 'react';

import UserCard from './UserCard'
import FollowersCard from './FollowersCard'


class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            followers: [],
            followersVisible: false,
            userName: [],
            userdata: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch(`https://api.github.com/users/Bilguun1015`),
            fetch(`https://api.github.com/users/Bilguun1015/followers`),
            fetch(`https://api.github.com/search/users?q=user:${this.state.userName}`)
        ])
            .then(([res1, res2, res3]) => {
                return Promise.all([res1.json(), res2.json(), res3.json()])
            })
            .then( ([res1,res2, res3]) => this.setState({ users: res1, followers: res2, userdata: res3}))
            .catch(err => console.log("have an error"))
    }

    componentDidUpdate() {
        
    }


    toggleFollower = () =>{
        if(this.state.followersVisible){
            this.setState({followersVisible:false})
        } else {this.setState({followersVisible:true})}
    }

    handleSubmit = e => {
        e.preventDefault()
        
    }

    handleNameChange = e => {
        this.setState({userName: e.target.value})
        console.log(this.state.userName)
    }


    render() {
        // console.log(this.state.users)
        // console.log(this.state.followers)
        console.log(this.state.userdata)
        return(
            <>
                <div>
                    <header>
                        <h1>GitHub Followers</h1>
                    </header>
                    <form onSubmit={this.componentDidUpdate}>
                        <input onChange={this.handleNameChange} palceholder="type GitHub username" />
                        <button>Search</button>
                    </form>
                    <div className="cards">
                    <div>
                        <UserCard users = {this.state.users} visible = {this.toggleFollower}/>
                    </div> 
                    <div>    
                        {this.state.followers.map( follower =>{
                            if(this.state.followersVisible){
                            return  <FollowersCard key={follower.id} follower = {follower} 
                            followersVisible={this.state.followersVisible}
                            />
                            } else{
                                return null
                            }
                        })}
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CardContainer