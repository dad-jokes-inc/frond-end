import React from 'react';

class JokeBoxPrivate extends React.Component {
    render(){
    return (
        <div className="center-container">
        <h3>{this.props.privateJokeyProps.length > 0 ? "" : `For more jokes, please register or log in!`}</h3>
                {this.props.privateJokeyProps.map(privateJoke => {
                return (
                    <div className="left-container" key={privateJoke.id}>
                        <span><h3>{privateJoke.joke}</h3><h5>by User {privateJoke.username}</h5></span> 
                    </div>
                )
                })}
        </div>
    )
    }
}

export default JokeBoxPrivate;