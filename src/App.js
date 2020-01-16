import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Navigation from './components/navigation/navigation';
import RoundList from './components/roundlist/roundlist';
// import Statistics from './components/statistics/statistics';
import Menu from './components/menu/menu';
import Signin from './components/signin/signin';
import Register from './components/register/register';
import Entry from './components/entry/entry';

import {setSearchField, requestRounds} from './actions';
import SearchBox from './components/searchbox/searchbox';

const mapStateToProps = state => {
  return {
    searchField: state.searchRounds.searchField,
    rounds: state.requestRounds.rounds,
    isPending: state.requestRounds.isPending,
    error: state.requestRounds.error,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRounds: () => dispatch(requestRounds())
  }
}

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
        // rounds: {
        //   id: '',
        //   score: '',
        //   score_to_par: '',
        //   playing_date: '',
        //   course: '',
        //   greens_in_regulation: '',
        //   fairways_in_regulation: '',
        //   putts: '',
        //   putts_per_gir: ''
        // }
      }
    }
  }

  componentDidMount() {
    this.props.onRequestRounds();
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

  showRoundDetail = () => {
    console.log('clicked rounds');
  }

  render() {
    const { isSignedIn, route } = this.state;
    const { searchField, onSearchChange, rounds, isPending } = this.props;
    const filteredRounds = rounds.filter(round => {
        console.log('round', round);
        return round.course.toLowerCase().includes(searchField.toLowerCase())
    });

    return isPending ? 
    <h1>Loading..</h1>
    :
    (
      <div className="App landing-background" >
        <Navigation
          isSignedIn={this.state.isSignedIn} 
          onRouteChange={this.onRouteChange}
        />
        { route === 'home' 
          ? 
          <div className="mx-auto center">
            <Menu onRouteChange={this.onRouteChange}/>

          </div>
          : (
            route === 'roundlist'
            ?
            isSignedIn ? 
            <div class="roundlist">
              <SearchBox searchChange={onSearchChange}/>
               <RoundList 
               rounds={filteredRounds}
               showRoundDetail={this.showRoundDetail} />
            </div>
            : 'Login to see this content!'
            :
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            // : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          ) 
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
