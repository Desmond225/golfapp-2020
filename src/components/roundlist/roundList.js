import React from 'react';
import Round from '../round/round';

const RoundList = ({onInputChange, onSubmitRound, onGetRounds}) => {
    return (
        <div>
            <button onClick={onGetRounds}>Get rounds</button>
        <div>
        {/* <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="round-score">Score</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" 
                            name="round-score"  
                            id="round-score"
                            onChange={onInputChange}
                        />
                    </div> */}
            <button onClick={onSubmitRound}>Submit round</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
            <Round />
        </div>
        </div>
    )
}

export default RoundList