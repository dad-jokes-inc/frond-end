import React from 'react';

class JokeBoxPublic extends React.Component {
    render(){
    return (
        <div>
        <h3>{this.props.jokeyProps.length > 0 ? "" : "Jokes are loading"}</h3>
                {this.props.jokeyProps.map(joke => {
                return (
                    <div key={joke.id}>
                        <h3>{joke.publicJoke}</h3>
                        <h5>By Anonymous</h5>
                    </div>
                )
                })}
        </div>
    )
    }
}

export default JokeBoxPublic;