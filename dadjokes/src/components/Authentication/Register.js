import React from 'react';
import {connect} from 'react-redux';
import {register} from '../../actions';

class Register extends React.Component {
    state = {
        username: "",
        password: "",
    }

    register = e => {
        e.preventDefault();
        // if (this.state.credentials.password !== this.state.passwordConfirm) {
        //     this.setState({error: "Your passwords do not match"})
        // } else if (this.state.credentials.password === this.state.passwordConfirm) {}
        this.props.register(this.state).then(() => this.props.history.push("/userprofile"))  
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render(){
    // console.log("Confirm:", this.state.passwordConfirm, "Pass:", this.state.credentials.password)
    if (localStorage.getItem("username")){
        return (
            <div>
                <h1>Register</h1>
                <h3>You are already logged in, {window.localStorage.getItem("username")}</h3>
            </div>
        )
    } 
    return(
        <div>
            <h1>Register</h1>
            <p>{this.state.error}</p>
            <form onSubmit={this.register}>
                <input name="username" type="text" placeholder="username" onChange={this.handleChanges}></input>
                <input name="password" type="text" placeholder="password" onChange={this.handleChanges}></input>
                {/* <input name="passwordConfirm" type="text" placeholder="confirm password" onChange={this.handleChanges}></input> */}
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