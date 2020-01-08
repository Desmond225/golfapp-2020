import React from 'react';

const Round = ({ score, course, id }) => {
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
                    <div className='b'>{id}</div>
                    <div>{course}</div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>Score to par</div>
                <div>FIR</div>
                <div>GIR</div>
                <div>Putts per gir</div>
            </div>
        </div>
    )
}

export default Round