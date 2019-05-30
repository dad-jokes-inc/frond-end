import React from 'react';

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
        this.props.editJoke(e, this.state.editedJoke)
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
        if (!this.state.editingBool) {
            return(
                <div>
                    <button onClick={this.toggleEdit}>Edit Joke</button>
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
                <button type="submit">Submit Joke</button>
            </form>
        </div>
    )
    }
}

export default EditJokeForm;