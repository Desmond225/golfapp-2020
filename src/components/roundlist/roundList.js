import React from 'react';
import Round from '../round/round';

  class RoundList extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            id: '',
            score: '',
            score_to_par: ''
        }
      }

      onScoreInputChange = (event) => {
        this.setState({score: event.target.value})
        console.log(this.state.score)
    }
    
    onScoreToParInputChange = (event) => {
      this.setState({score_to_par: event.target.value})
      console.log(this.state.score_to_par)
    }

    onRoundIdInputChange = (event) => {
        this.setState({id: event.target.value})
        console.log(this.state.id)
    }
    
      onSubmitRound = () => {
        fetch('http://localhost:3005/entry', {
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            id: this.state.id,
            score: this.state.score,
            score_to_par: this.state.score_to_par
          })
        })
        .then(response => response.json())
        .then(round => {
            console.log('posted round with data: ', round);
        })
        .catch(err => console.log('error: ', err));
    }
        // .then((count, rounds) => {
        //   this.setState(Object.assign(this.state.id, {submitted_rounds: count}))
    
        //   console.log('before change ', this.state.user.rounds);
        //   this.setState(Object.assign(this.state.user.rounds, {score: rounds}))
        //   this.setState(Object.assign(this.state.user.rounds, {score_to_par: rounds}))
        //   console.log('after change ', this.state.user.rounds);
        // })
        // .then(console.log('rounds submitted: ', this.state.user.submitted_rounds))
        // .catch(console.log('error submitting round'));

      render() {

        const { onGetRounds } = this.props;
        return (
            <div>
                <button onClick={onGetRounds}>Get rounds</button>
            <div>
            <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">id</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="number" 
                                name="round-id"  
                                id="round-id"
                                onChange={this.onRoundIdInputChange}
                            />
                            <label className="db fw6 lh-copy f6" htmlFor="round-score">Score</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="number" 
                                name="round-score"  
                                id="round-score"
                                onChange={this.onScoreInputChange}
                            />
    
    <label className="db fw6 lh-copy f6" htmlFor="round-score">Score to par</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="number" 
                                name="round-score-to-par"  
                                id="round-score-to-par"
                                onChange={this.onScoreToParInputChange}
                            />
                        </div>
                <button onClick={this.onSubmitRound}>Submit round</button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
                <Round />
            </div>
            </div>
        )
      }
    }

export default RoundList

// const RoundList = ({onScoreInputChange, onScoreToParInputChange, onSubmitRound, onGetRounds}) => {
//     return (
//         <div>
//             <button onClick={onGetRounds}>Get rounds</button>
//         <div>
//         <div className="mt3">
//                         <label className="db fw6 lh-copy f6" htmlFor="round-score">Score</label>
//                         <input 
//                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
//                             type="number" 
//                             name="round-score"  
//                             id="round-score"
//                             onChange={onScoreInputChange}
//                         />

// <label className="db fw6 lh-copy f6" htmlFor="round-score">Score to par</label>
//                         <input 
//                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
//                             type="number" 
//                             name="round-score-to-par"  
//                             id="round-score-to-par"
//                             onChange={onScoreToParInputChange}
//                         />
//                     </div>
//             <button onClick={onSubmitRound}>Submit round</button>
//         </div>
//         <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
//             <Round />
//         </div>
//         </div>
//     )
// }

// export default RoundList