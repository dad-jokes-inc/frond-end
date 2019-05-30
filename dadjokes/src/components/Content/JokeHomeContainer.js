import React from 'react';
import {connect} from 'react-redux';
import {getJokes, deleteJoke, editJoke, publicJokes} from '../../actions';
import JokeBoxPublic from './JokeBoxPublic';
import JokeBoxPrivate from './JokeBoxPrivate';

class JokeHomeContainer extends React.Component {
    state = {
        filteredJokes: [],
        filteredPrivateJokes: [],
    }

    componentDidMount(){
        this.props.publicJokes();
        this.props.getJokes();
    }

    handleSearch = (event) => {
        // eslint-disable-next-line
        const joking = this.props.jokes.filter(j => {
            if (j.publicJoke.includes(event.target.value)) {
                return j;
            }
        })
        // eslint-disable-next-line
        const privateJoking = this.props.privateJokes.filter(u => {
            if (u.joke.includes(event.target.value)) {
                return u;
            }
        })
        this.setState({
            filteredJokes: joking,
            filteredPrivateJokes: privateJoking,
        })
    }

    render(){
    console.log(this.state.jokesData)
    return (
        <div>
            <div>
                <h1>Welcome to Dad Jokes!</h1>
                <form>
                    <h5>Note: searching is <strong>case-sensitive</strong></h5>
                    <input onChange={this.handleSearch} placeholder="This is a Search Bar"></input>
                </form>
            </div>
        <JokeBoxPublic jokeyProps={this.state.filteredJokes.length > 0 ? this.state.filteredJokes : this.props.jokes} />
        <JokeBoxPrivate privateJokeyProps={this.state.filteredPrivateJokes.length > 0 ? this.state.filteredPrivateJokes : this.props.privateJokes} />
        </div>
    )
    }
}

const mapStateToProps = state => ({
    jokes: state.jokes,
    fetchingJokes: state.fetchingJokes,
    publickingJokes: state.publickingJokes,
    privateJokes: state.privateJokes
})

export default connect(mapStateToProps, {publicJokes, getJokes, deleteJoke, editJoke})(JokeHomeContainer);