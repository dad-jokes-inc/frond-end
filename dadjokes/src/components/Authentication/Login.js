import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions';

class Login extends React.Component {
    state = {
        credentials: {
        username: "",
        password: ""
        }
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => this.props.history.push("/userprofile"));
    }

    handleChanges = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
            }
        });
    }


    render(){
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={this.login}>
                <input name="username" type="text" placeholder="username" onChange={this.handleChanges}></input>
                <input name="password" type="password" placeholder="password" onChange={this.handleChanges}></input>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
    }
}

const mapActionsToProps = {
    login
}

export default connect(null, mapActionsToProps)(Login);