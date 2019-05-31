import React from 'react';
import {connect} from 'react-redux';
import {getJokes, editJoke} from '../../actions';
import {Button} from 'reactstrap';

class EditJokeForm extends React.Component {
    state = {
        editedJoke: this.props.jokeProps,
        editingBool: false
    }

    handleChanges = e => {
        this.setState({
            editedJoke: {
                ...this.state.editedJoke,
                [e.target.name]: e.target.value
            }
        })
    }

    editJoke = e => {
        e.preventDefault();
        const bananaJoke = {
            joke: this.state.editedJoke.joke
        }
        const jokeID = this.state.editedJoke.id
        this.props.editJoke(bananaJoke, jokeID).then(() => this.props.getJokes())
        this.setState({
            editingBool: false
        })
    }

    toggleEdit = e => {
        e.preventDefault();
        this.setState({
            editingBool: true
        })
    }

    render(){
        console.log("Props for editform", this.props.jokeProps)
        if (!this.state.editingBool) {
            return(
                <div>
                    <Button onClick={this.toggleEdit}>Edit Joke</Button>
                </div>
            )
        }
    return(
        <div>
            <form onSubmit={this.editJoke}>
                <input       
                type="text"
                name="joke"
                placeholder="Joke"
                onChange={this.handleChanges}
                value={this.state.editedJoke.joke}/>
                <Button>Submit Joke</Button>
            </form>
        </div>
    )
    }
}

export default connect(null, {editJoke, getJokes})(EditJokeForm);