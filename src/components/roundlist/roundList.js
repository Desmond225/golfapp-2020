import React from 'react';
import Round from '../round/round';

const RoundList = ({onGetRounds, onSubmitRound}) => {
    return (
        <div><button onClick={onGetRounds}>Get rounds</button>
        <button onClick={onSubmitRound}>Submit round</button>
        <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
            <Round />
        </div>
        </div>
    )
}

export default RoundList