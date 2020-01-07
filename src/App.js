import React, { Component } from 'react';
// import {connect} from 'react-redux';
import './App.css';
import Navigation from './components/navigation/navigation';
import RoundList from './components/roundlist/roundlist';
// import Statistics from './components/statistics/statistics';
import Menu from './components/menu/menu';
import Signin from './components/signin/signin';
import Register from './components/register/register';
import Entry from './components/entry/entry';
import { connect } from 'react-redux';

// import {setSearchField} from './actions';

// const mapStateToProps = state => {
//   return {
//     searchField: state.searchField
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value))
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        submitted_rounds: 0,
        joined: '',
        rounds: {
          id: '',
          score: '',
          score_to_par: '',
          playing_date: '',
          course: '',
          greens_in_regulation: '',
          fairways_in_regulation: '',
          putts: '',
          putts_per_gir: ''
        }
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      submitted_rounds: data.submitted_rounds,
      joined: data.joined,
      rounds: {
        id: data.id,
        score: data.score,
        score_to_par: data.score_to_par,
        playing_date: data.playing_date,
        course: data.course,
        greens_in_regulation: data.greens_in_regulation,
        fairways_in_regulation: data.fairways_in_regulation,
        putts: data.putts,
        putts_per_gir:data.putts_per_gir
      }
    }})
  }

  onGetRounds = (req, res) => {
    fetch('http://localhost:3005/rounds')
    .then(response => response.json())
    .then(rounds => {
      console.log('rounds ', rounds);
    })
    .catch(console.log('error fetching rounds')
    )}

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
      <div className="App landing-background" >
        <Navigation
          isSignedIn={this.state.isSignedIn} 
          onRouteChange={this.onRouteChange}
        />
        { route === 'home' 
          ? 
          <div class="w-50 mx-auto center">
            <Menu onRouteChange={this.onRouteChange}/>
            {/* <RoundList 
              onGetRounds={this.onGetRounds} 
              // onScoreInputChange={this.onScoreInputChange}
              // onScoreToParInputChange={this.onScoreToParInputChange}
              // onSubmitRound={this.onSubmitRound} 
              /> */}
          </div>
          : (
            route === 'entry'
            ? 
            <div class="entry">
              <Entry />
            </div>
            :
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            // : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          ) 
        }
      </div>
    );
  }
}




export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
