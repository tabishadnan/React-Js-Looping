import React, { Component } from 'react';

class User extends Component {
    render() {

        const {name, age, education, hobbies} = this.props;

        return (
            <div>
                <h1>Name : {name}</h1>
                <p>Age : {age}</p>
                <p>Education : {education}</p>
                <p>Hobbies :</p>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        );
    }
}

export default User;