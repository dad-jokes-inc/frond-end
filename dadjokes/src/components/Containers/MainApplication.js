import React from 'react';
/*Collection of imported components */
import PrivateRoute from '../Containers/PrivateRoute';
import JokeForm from '../Content/JokeForm';
import JokeList from '../Content/JokeList';
import UserForm from '../User/UserForm';
import UserProfile from '../User/UserProfile';
import JokeListPrivate from '../Content/JokesListPrivate';

const MainApplication = () => {
    return(
        <div>
            <UserForm/> {/*This renders the new user form */}
            <UserProfile/>{/*This renders the user's profile */}
            <JokeForm/>{/*This renders the new joke Form */}
            <JokeList/>{/*This renders the public list of jokes */}
            <JokeListPrivate/>{/*This renders the private list of jokes */}

            {/* This is where Routes are set up */}
            <PrivateRoute path="/jokes" component={JokeList}></PrivateRoute>
            <PrivateRoute path="/userprofile" component={UserProfile}></PrivateRoute>
            <PrivateRoute path="/addjoke" component={JokeForm}></PrivateRoute>
       </div>
    )
}

export default MainApplication;