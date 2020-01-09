import React from 'react';

const Round = ({ id, score, course, playing_date, score_to_par, fairways_in_regulation, greens_in_regulation, putts_per_gir, putts }) => {
    let rawDate = new Date(playing_date);
    let formattedDate = rawDate.getDate() + "-" + parseInt(rawDate.getMonth()+1) + "-" + rawDate.getFullYear();

    return (
        <div
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
                <div>FIR: {fairways_in_regulation}/13</div>
                <div>GIR: {greens_in_regulation}/18</div>
                <div>Putts per gir: {putts_per_gir}</div>
                <div>Putts: {putts}</div>
            </div>
        </div>
    )

}

export default Round