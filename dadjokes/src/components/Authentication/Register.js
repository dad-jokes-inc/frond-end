import React from 'react';
import {connect} from 'react-redux';
import {register} from '../../actions';

class Register extends React.Component {
    state = {
        username: "",
        password: ""
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state).then(() => this.props.history.push("/userprofile"));
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }


    render(){
    if (localStorage.getItem("username")){
        return (
            <h3>You are already logged in, {window.localStorage.getItem("username")}</h3>
        )
    } 
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={this.register}>
                <input name="username" type="text" placeholder="username" onChange={this.handleChanges}></input>
                <input name="password" type="text" placeholder="password" onChange={this.handleChanges}></input>
                <button type="submit">Register</button>
            </form>
        </div>
    )
    }
}

const mapActionsToProps = {
    register
}

export default connect(null, mapActionsToProps)(Register);