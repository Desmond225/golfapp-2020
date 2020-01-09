import React from 'react';
import Round from '../round/round';
import SearchBox from '../searchbox/searchbox';
import Scroll from '../scroll/scroll';

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