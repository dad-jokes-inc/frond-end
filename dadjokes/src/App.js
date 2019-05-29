import React from 'react';
import {Route} from 'react-router-dom';

/* These are the public components being called in */
import JokeList from './components/Content/JokeList';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

/* These are the private components being called in */
import UserProfile from './components/User/UserProfile';
import JokesListPrivate from './components/Content/JokesListPrivate';
import AddJokeForm from './components/Content/AddJokeForm';

/* These are frames for the body of the app */
import Header from './components/Frame/Header';
import Footer from './components/Frame/Footer';

/* These are the route components being added in for further functionality */
import PrivateRoute from './components/Routes/PrivateRoute';
class App extends React.Component {

  render(){
  return (
    <div>
      <Header />{/*This renders the header */}
      <Route exact path="/" component={JokeList} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/addjokeform" component={AddJokeForm} />
      <PrivateRoute path="/userprofile" component={UserProfile} />
      <PrivateRoute path="/jokeform" component={AddJokeForm} />
      <PrivateRoute path="/jokeslistprivate" component={JokesListPrivate} />
      <Footer />{/*This renders the footer */}
    </div>
  );
  }
}

export default App;
