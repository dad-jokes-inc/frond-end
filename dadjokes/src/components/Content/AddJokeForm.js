import React from 'react';
import {connect} from 'react-redux';
import {addJokes, getJokes} from '../../actions';

class AddJokeForm extends React.Component {
    state = {
        newJoke: {
            joke: ""
        },
        addingBool: false,
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
        this.props.addJokes(this.state.newJoke).then(() => this.props.getJokes())
        this.setState({
            newJoke: {
                joke: "",
            },
            addingBool: false,
        })
    }

    toggleAdd = e => {
        e.preventDefault();
        this.setState({
            addingBool: true
        })
    }

    render(){
        if (!this.state.addingBool) {
            return(
                <div>
                    <button onClick={this.toggleAdd}>Add Joke</button>
                </div>
            )
        }
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

export default connect(mapStateToProps, {addJokes, getJokes})(AddJokeForm);