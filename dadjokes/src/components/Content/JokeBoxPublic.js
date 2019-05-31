import React from 'react';
import './Jokes.css'

class JokeBoxPublic extends React.Component {
    render(){
    return (
        <div className="center-container">
        <h3>{this.props.jokeyProps.length > 0 ? "" : "Jokes are loading"}</h3>
                {this.props.jokeyProps.map(joke => {
                return (
                    <div className="left-container" key={joke.id}>
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