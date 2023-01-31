import React, {Component} from 'react';
import {Route} from 'react-router';
import Login from './screens/Login';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Route exact path="/" component={Login}/>
        </div>
    );
  }
}
export default App;
