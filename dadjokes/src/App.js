import React from 'react';
import MainApplication from './components/Containers/MainApplication';
import Login from './components/Authentication/Login';
import {Route} from 'react-router-dom';
import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';

class App extends React.Component {

  render(){
  return (
    <div>
      <Header />{/*This renders the header */}
      <MainApplication />
      <Footer />{/*This renders the footer */}
      {/*This is where unprotected routes are set */}
      <Route path="/login" component={Login} />
    </div>
  );
  }
}

export default App;
