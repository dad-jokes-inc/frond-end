import React from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends React.Component {

    logOut = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    render(){
    return (
        <div>
            <h1>Hello {window.localStorage.getItem("username")}</h1>
            <h4>Your password is {window.localStorage.getItem("password")}</h4>
            <Link to="/addjokeform">Add a joke!</Link>
            <ul>
                <li>This is a joke I've liked!</li>
                <li>This is a joke I've liked!</li>
                <li>This is a joke I've liked!</li>
                <li>This is a joke I've liked!</li>
                <li>This is a joke I've liked!</li>
            </ul>
            <button onClick={this.logOut}>Logout</button>
        </div>
    )
    }
}

export default UserProfile;