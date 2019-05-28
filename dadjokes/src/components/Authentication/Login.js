import React from 'react';

class Login extends React.Component {
    state = {
        user: "",
        pass: ""
    }

    login = () => {
        localStorage.setItem('user', `${this.state.user}`);
        localStorage.setItem('password', `${this.state.pass}`);
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render(){
    return(
        <div>
            <form onSubmit={this.login}>
                <input name="user" type="text" placeholder="username" onChange={this.handleChanges}></input>
                <input name="pass" type="text" placeholder="password" onChange={this.handleChanges}></input>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
    }
}

export default Login;