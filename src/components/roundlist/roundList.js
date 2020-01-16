import React from 'react';
import Round from '../round/round';
import SearchBox from '../searchbox/searchbox';
import Scroll from '../scroll/scroll';

const RoundList = ({rounds, showRoundDetail}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {
            rounds.map((user, i) => {
              return (
                <Round
                showRoundDetail={showRoundDetail[i]}
                key={i}
                id={rounds[i].id}
                playing_date={rounds[i].playing_date}
                course={rounds[i].course}
                score={rounds[i].score}
                score_to_par={rounds[i].score_to_par}
                fairways_in_regulation={rounds[i].fairways_in_regulation}
                greens_in_regulation={rounds[i].greens_in_regulation}
                putts={rounds[i].putts}
                putts_per_gir={rounds[i].putts_per_gir}
                />
              );
            })
          }
        </div>
    );
}

export default RoundList