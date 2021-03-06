import React from 'react';
import {connect} from 'react-redux';
import {register} from '../../actions';
import './Credentials.css'
import {Button} from 'reactstrap';

class Register extends React.Component {
    state = {
        username: "",
        password: "",
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state).then(() => this.props.history.push("/userprofile"))  
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render(){
    if (localStorage.getItem("username")){
        return (
            <div className="container">
                <h1>Register</h1>
                <h3>You are already logged in, {window.localStorage.getItem("username")}</h3>
            </div>
        )
    } 
    return(
        <div className="container">
            <h1>Register</h1>
            <p>{this.state.error}</p>
            <p>You will need to log in after registering.</p>
            <form onSubmit={this.register}>
                <input name="username" type="text" placeholder="username" onChange={this.handleChanges}></input>
                <input name="password" type="text" placeholder="password" onChange={this.handleChanges}></input>
                <Button type="submit">Register</Button>
            </form>
        </div>
    )
    }
}

const mapActionsToProps = {
    register
}

export default connect(null, mapActionsToProps)(Register);