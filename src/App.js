import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation'
import RoundList from './components/roundlist/roundlist'
import Statistics from './components/statistics/statistics'

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
    const {route} = this.state;
    return (
      <div className="App">
        <Navigation 
          onRouteChange={this.onRouteChange}
        />
        { route === 'home' 
          ? 
          <div className={{display: 'flex', flexDirection: 'column'}}>
            <button className='f4 w-100 link dim ph4 pv2 dib white bg-blue tl'>Play golf (coming soon)</button>
            <button className='f4 w-100 link dim ph4 pv2 dib white bg-blue tl'>Book teetimes (coming soon)</button>
            <button className='f4 w-100 link dim ph4 pv2 dib white bg-blue tl'>Learn more (coming soon)</button>
          </div>
          : (
            route === 'roundlist'
            ? <RoundList />
            : <Statistics /> 
          )          
        }

      </div>
    );
  }
}




export default App;
