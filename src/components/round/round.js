import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faRoad, faRing } from '@fortawesome/free-solid-svg-icons'

const Round = ({ showRoundDetail, score, course, playing_date, score_to_par, fairways_in_regulation, greens_in_regulation, putts_per_gir, putts }) => {
    let rawDate = new Date(playing_date);
    let formattedDate = rawDate.getDate() + "-" + parseInt(rawDate.getMonth()+1) + "-" + rawDate.getFullYear();

    const bullsEyeIcon = <FontAwesomeIcon icon={faBullseye} />
    const roadIcon = <FontAwesomeIcon icon={faRoad} />
    const ringIcon = <FontAwesomeIcon icon={faRing} />

    return (
        <div
            onClick={showRoundDetail}
            className='pv3 ph3' 
            style={{border: '1px solid black'}}>
            <div
                className='pv2'
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <div 
                className='f2 b ph3'
                style={{alignSelf: 'center'}}
                >{score}</div>
                <div className='tl'>
                    <div className='b'>{formattedDate}</div>
                    <div>{course}</div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>+{score_to_par}</div>
                <div>{roadIcon} {fairways_in_regulation}/13</div>
                <div>{bullsEyeIcon} {greens_in_regulation}/18</div>
                <div>{ringIcon} {putts}</div>
            </div>
        </div>
    )

}

export default Round