import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import RoundList from './components/roundlist/roundlist';
// import Statistics from './components/statistics/statistics';
import Menu from './components/menu/menu';
import Signin from './components/signin/signin';
import Register from './components/register/register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        submitted_rounds: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      submitted_rounds: data.submitted_rounds,
      joined: data.joined
    }})
  }

  onSubmitRound = () => {
    fetch('http://localhost:3005/rounds', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {submitted_rounds: count}))
    })
    .then(console.log('rounds submitted: ', this.state.user.submitted_rounds))
    .catch(console.log('error submitting round'));
  }

  onGetRounds = (req, res) => {
    fetch('http://localhost:3005/rounds')
    .then(res => res.json())
    .catch(console.log('error fetching rounds'));
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    }
    else if(route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={this.state.isSignedIn} 
          onRouteChange={this.onRouteChange}
        />
        { route === 'home' 
          ? 
          <div>
            <Menu />
            <RoundList onGetRounds={this.onGetRounds} onSubmitRound={this.SubmitRound}/>
          </div>
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )        
        }

      </div>
    );
  }
}




export default App;
