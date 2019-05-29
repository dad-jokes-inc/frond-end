import React from 'react';
import {connect} from 'react-redux';
import { deleteJoke, editJoke} from '../../actions';
import EditJokeForm from './EditJokeForm';

class JokeListPrivate extends React.Component {
    componentDidMount(){
        this.props.getUserJokes();
    }

    deleteJoke = id => {
        this.props.deleteJoke(id)
    }

    editJoke = (e, joke) => {
        e.preventDefault();
        this.props.editJoke(joke);
    }

    render(){
        if (this.props.fetchingJokes){
            return (
                <h3>Getting Jokes!</h3>
            )
        }
        return (
            <div>
            <h1>This is a Joke List </h1>
            {this.props.jokes.map(joke => {
            return (
            <div key={joke.id}>
                <h3>{joke.joke}</h3>
                <h3>{joke.user_id}</h3>
                <EditJokeForm jokeProps={joke} editJoke={this.editJoke}/>
                <button onClick={() => {this.deleteJoke(joke.id)}}>Delete Joke</button>
            </div>
            )
            })}
            </div>
        )
        }
}

const mapStateToProps = ({ fetchingJokes, editingJokes, deletingJokes}) => ({
     fetchingJokes, editingJokes, deletingJokes
})

export default connect(mapStateToProps, { deleteJoke, editJoke})(JokeListPrivate);