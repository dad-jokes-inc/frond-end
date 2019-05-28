import React from 'react';
import MainApplication from './components/Containers/MainApplication';
import Login from './components/Authentication/Login';
import withAuthenticate from './components/Authentication/WithAuthenticate';

const ComponentFromWithAuthneticate = withAuthenticate(MainApplication)(Login)

class App extends React.Component {

  render(){
  return (
    <div>
      <ComponentFromWithAuthneticate />
    </div>
  );
  }
}

export default App;
