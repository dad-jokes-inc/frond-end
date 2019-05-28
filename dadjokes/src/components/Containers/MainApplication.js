import React from 'react';
import Header from '../Containers/Header';
import Footer from '../Containers/Footer';
import JokeForm from '../Content/JokeForm';
import JokeList from '../Content/JokeList';
import UserForm from '../User/UserForm';
import UserProfile from '../User/UserProfile';

const MainApplication = (props) => {
    return(
        <div>
            <Header/> {/*This renders the header */}
            <UserForm/> {/*This renders the new user form */}
            <UserProfile/>{/*This renders the user's profile */}
            <JokeForm/>{/*This renders the new joke Form */}
            <JokeList/>{/*This renders the public list of jokes */}
            <button onClick={props.logOut}>Log Out</button>
            <Footer/>{/*This renders the footer */}
       </div>
    )
}

export default MainApplication;