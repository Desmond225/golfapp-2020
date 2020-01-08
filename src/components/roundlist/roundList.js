import React from 'react';
import Round from '../round/round';
import SearchBox from '../searchbox/searchbox';
import Scroll from '../scroll/scroll';

//   class RoundList extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//             user: '',
//             id: '',
//             score: '',
//             score_to_par: ''
//         }
//       }
    
//     onLoadUserProfile = (event, req) => {
//         fetch(`http://localhost:3005/profile/1`) 
//         // make this a dynamic id e.g. 
//         // fetch('http://localhost:3005/profile/${user.id}')

//             .then(response => response.json())
//             .then(user => 
//                 this.setState({
//                     user: user
//                 })
//             )}

//       onScoreInputChange = (event) => {
//         this.setState({score: event.target.value})
//         console.log(this.state.score)
//     }
    
//     onScoreToParInputChange = (event) => {
//       this.setState({score_to_par: event.target.value})
//       console.log(this.state.score_to_par)
//     }

//     onRoundIdInputChange = (event) => {
//         this.setState({id: event.target.value})
//         console.log(this.state.id)
//     }
    
//       onSubmitRound = () => {
//         fetch('http://localhost:3005/entry', {
//           method: 'post',
//           headers: {'Content-type': 'application/json'},
//           body: JSON.stringify({
//             id: this.state.id,
//             score: this.state.score,
//             score_to_par: this.state.score_to_par
//           })
//         })
//         .then(response => response.json())
//         .then(round => {
//             console.log('posted round with data: ', round);
//         })
//         .catch(err => console.log('error: ', err));
//     }

//       render() {
//         return (
//             <div>
//                 <button onClick={this.onLoadUserProfile}>Get profile</button>
//                 {this.state.user 
//                 ?
//                 <div>
//                     <h1>user: {this.state.user.email}</h1>
//                     <h6>joined: {this.state.user.joined} </h6>
//                     <h6>Submitted rounds: {this.state.user.submitted_rounds}</h6>
//                 </div>
//                 :
//                 ''
//                 }

//                 {/* <button onClick={requestRounds}>Get rounds</button> */}

//                   <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
//                 <Round />
//             </div>
//             </div>
//         )
//       }
//     }

// export default RoundList

const RoundList = ({rounds}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
          {
            rounds.map((user, i) => {
              return (
                <Round 
                key={i}
                id={rounds[i].id}
                course={rounds[i].course}
                score={rounds[i].score}
                />
              );
            })
          }
        </div>
    );
}

export default RoundList