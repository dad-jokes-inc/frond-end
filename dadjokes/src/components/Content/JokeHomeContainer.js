import React from 'react';
import {connect} from 'react-redux';
import {getJokes, deleteJoke, editJoke, publicJokes} from '../../actions';
import JokeBoxPublic from './JokeBoxPublic';
import JokeBoxUser from './JokeBoxUser';

class JokeHomeContainer extends React.Component {
    state = {
        filteredJokes: [],
        filteredUserJokes: [],
    }

    componentDidMount(){
        this.props.publicJokes();
        this.props.getJokes();
    }

    handleSearch = (event) => {
        console.log("Searching!")
        const joking = this.props.jokes.filter(j => {
            if (j.publicJoke.includes(event.target.value)) {
                return j;
            }
        })
        const userJoking = this.props.userJokes.filter(u => {
            if (u.joke.includes(event.target.value)) {
                return u;
            }
        })
        this.setState({
            filteredJokes: joking,
            filteredUserJokes: userJoking,
        })
    }

    render(){
    console.log(this.state.jokesData)
    return (
        <div>
            <div>
                <h1>Welcome to Dad Jokes!</h1>
                <form>
                    <input onChange={this.handleSearch} placeholder="This is a Search Bar"></input>
                </form>
            </div>
        <JokeBoxPublic jokeyProps={this.state.filteredJokes.length > 0 ? this.state.filteredJokes : this.props.jokes} />
        <JokeBoxUser userJokeyProps={this.state.filteredUserJokes.length > 0 ? this.state.filteredUserJokes : this.props.userJokes} />
        </div>
    )
    }
}

const mapStateToProps = state => ({
    jokes: state.jokes,
    fetchingJokes: state.fetchingJokes,
    publickingJokes: state.publickingJokes,
    userJokes: state.userJokes
})

export default connect(mapStateToProps, {publicJokes, getJokes, deleteJoke, editJoke})(JokeHomeContainer);