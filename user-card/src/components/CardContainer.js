import React from 'react';

import UserCard from './UserCard'
import FollowersCard from './FollowersCard'


class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            followers: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch(`https://api.github.com/users/Bilguun1015`),
            fetch(`https://api.github.com/users/Bilguun1015/followers`),
        ])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then( ([res1,res2]) => this.setState({ users: res1, followers: res2}))
            .catch(err => console.log("have an error"))
    }



    render() {
        console.log(this.state.users)
        console.log(this.state.followers)
        return(
            <>
                <div>
                    <header>
                        <h1>hi</h1>
                    </header>
                    <div className="cards">
                        <UserCard users = {this.state.users}/>
                        {this.state.followers.map( follower =>{
                            return  <FollowersCard follower = {follower}/>
                        })}
                    </div>  
                </div>
            </>
        )
    }
}

export default CardContainer