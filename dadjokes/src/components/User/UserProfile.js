import React from 'react';
import {connect} from 'react-redux';
import {getJokes, deleteJoke, editJoke} from '../../actions';
import EditJokeForm from '../Content/EditJokeForm';
import AddJokeForm from '../Content/AddJokeForm';

class UserProfile extends React.Component {
    componentDidMount(){
        this.props.getJokes();
    }
    
    deleteJoke = id => {
        this.props.deleteJoke(id).then(() => this.props.getJokes())
    }

    editJoke = (e, joke) => {
        e.preventDefault();
        this.props.editJoke(joke).then(() => this.props.getJokes())
    }
    logOut = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    render(){
    return (
        <div>
            <h1>Hello {window.localStorage.getItem("username")}</h1>
            <h4>Your password is {window.localStorage.getItem("password")}</h4>
            <AddJokeForm />
            {this.props.userJokes.map(joke => {
        return (
            <div key={joke.id}>
                <h3>{joke.joke}</h3>
                <EditJokeForm jokeProps={joke} editJoke={this.editJoke}/>
                <button onClick={() => this.deleteJoke(joke.id)}>Delete Joke</button>
            </div>
        )
        })}
            <button onClick={this.logOut}>Logout</button>
        </div>
    )
    }
}
const mapStateToProps = state => ({
    userJokes: state.userJokes,
    fetchingJokes: state.fetchingJokes
})

export default connect(mapStateToProps, {getJokes, deleteJoke, editJoke})(UserProfile);