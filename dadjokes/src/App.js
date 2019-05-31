import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'

/* These are the public components being called in */
import JokeHomeContainer from './components/Content/JokeHomeContainer';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

/* These are the private components being called in */
import UserProfile from './components/User/UserProfile';
import AddJokeForm from './components/Content/AddJokeForm';

/* These are frames for the body of the app */
import Header from './components/Frame/Header';
import Footer from './components/Frame/Footer';

/* These are the route components being added in for further functionality */
import PrivateRoute from './components/Routes/PrivateRoute';

class App extends React.Component {

  render(){
  return (
    <div className="app">
      <Header />{/*This renders the header */}
      <Route exact path="/" component={JokeHomeContainer} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/addjokeform" component={AddJokeForm} />
      <PrivateRoute path="/userprofile" component={UserProfile} />
      <PrivateRoute path="/jokeform" component={AddJokeForm} />
      <Footer />{/*This renders the footer */}
    </div>
  );
  }
}

export default App;
