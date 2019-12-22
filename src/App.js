import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Navigation 
          onRouteChange={this.onRouteChange}
        />
        {/* <RoundList />  */}
        {/* merge into later menu */}
        {/* <Statistics />  */}
        {/* merge into later menu */}
      </div>
    );
  }
}




export default App;
