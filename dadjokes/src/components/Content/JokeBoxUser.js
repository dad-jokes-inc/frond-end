import React from 'react';
import {connect} from 'react-redux';
import {userOnlyJokes, deleteJoke, editJoke} from '../../actions';
import EditJokeForm from '../Content/EditJokeForm';


class JokeBoxUser extends React.Component {

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
                <div key={userJoke.id}>
                    <h3>{userJoke.joke}</h3>
                    <EditJokeForm jokeProps={userJoke} editJoke={this.props.editJokeProps}/>
                    <button onClick={() => this.props.deleteJokeProps(userJoke.id)}>Delete Joke</button>
                </div>
            )
            })}
        </div>
    )
    }
}


export default connect(null, {userOnlyJokes, deleteJoke, editJoke})(JokeBoxUser);