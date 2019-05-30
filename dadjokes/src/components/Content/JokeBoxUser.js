import React from 'react';

class JokeBoxUser extends React.Component {
    render(){
    return (
        <div>
        <h3>{this.props.userJokeyProps.length > 0 ? "" : `For more jokes, please register or log in!`}</h3>
                {this.props.userJokeyProps.map(userJoke => {
                return (
                    <div key={userJoke.id}>
                        <span><h3>{userJoke.joke}</h3><h5>by User #{userJoke.user_id}</h5></span> 
                    </div>
                )
                })}
        </div>
    )
    }
}

export default JokeBoxUser;