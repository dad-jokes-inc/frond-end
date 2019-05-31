import React from 'react';
import EditJokeForm from '../Content/EditJokeForm';
import {connect} from 'react-redux';
import {getJokes, deleteJoke} from '../../actions';
import './Jokes.css'
import {Button} from 'reactstrap';

class JokeBoxUser extends React.Component {

    deleteJoke = (e, id) => {
        e.preventDefault();
        this.props.deleteJoke(id).then(() => this.props.getJokes())
    }

    render(){
    if (this.props.userJokesProps === 0){
        return (
            <h3>You haven't added any jokes!</h3>
        )
    }
    return (
        <div>
            {this.props.userJokesProps.map(userJoke => {
            return (
                <div className="left-container-user" key={userJoke.id}>
                    <h3>{userJoke.joke}</h3>
                    <EditJokeForm jokeProps={userJoke}/>
                    <Button onClick={(e) => this.deleteJoke(e, userJoke.id)}>Delete Joke</Button>
                </div>
            )
            })}
        </div>
    )
    }
}


export default connect(null, {getJokes, deleteJoke})(JokeBoxUser);