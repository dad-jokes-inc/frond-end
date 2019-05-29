import React from 'react';
import {connect} from 'react-redux';
import {addJokes} from '../../actions';

class AddJokeForm extends React.Component {
    state = {
        newJoke: {
            joke: "",
        }
    }

    handleChanges = e => {
        this.setState({
            newJoke: {
                ...this.state.newJoke,
                [e.target.name]: e.target.value
            }
        })
    }

    addJoke = e => {
        e.preventDefault();
        this.props.addJokes(this.state.newJoke).then(() => this.props.history.push("/"));
        this.setState({
            newJoke: {
                joke: "",
            }
        })
    }

    render(){
    return(
        <div>
            <form onSubmit={this.addJoke}>
                <input 
                type="text"
                name="joke"
                placeholder="Joke"
                onChange={this.handleChanges}
                value={this.state.newJoke.joke} />
                <button type="submit">Submit Joke</button>
            </form>
        </div>
    )
    }
}

const mapStateToProps = ({addingJokes, jokes}) => ({
    jokes, addingJokes
})

export default connect(mapStateToProps, {addJokes})(AddJokeForm);