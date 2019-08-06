import React from 'react';

import UserCard from './UserCard'


class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/Bilguun1015`)
            .then(res => res.json())
            .then(person => this.setState({ users: person }))
            .catch(err => console.log("have an error"))
    }


    render() {
        return(
            <>
                <div>
                    <header>
                        <h1>hi</h1>
                    </header>
                    <div className="cards">
                        <UserCard users = {this.state.users}/>
                    </div>  
                </div>
            </>
        )
    }
}

export default CardContainer