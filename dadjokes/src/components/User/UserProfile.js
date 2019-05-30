import React from 'react';
import {connect} from 'react-redux';
import {getJokes, deleteJoke, editJoke} from '../../actions';
import AddJokeForm from '../Content/AddJokeForm';
import JokeBoxUser from '../Content/JokeBoxUser';

class UserProfile extends React.Component {
    componentDidMount(id){
        this.props.getJokes(id);
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
            <JokeBoxUser userJokesProps={this.props.userJokes} editJokeProps={this.editJoke} deleteJokeProps={this.deleteJoke}/>
            <button onClick={this.logOut}>Logout</button>
        </div>
    )
    }
}
const mapStateToProps = state => ({
    userJokes: state.privateJokes,
    fetchingJokes: state.fetchingJokes
})

export default connect(mapStateToProps, {getJokes, deleteJoke, editJoke})(UserProfile);