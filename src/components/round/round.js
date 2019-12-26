import React from 'react';

const Round = () => {
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
                >75</div>
                <div className='tl'>
                    <div className='b'>January 01, 2020</div>
                    <div>Golfbaan De Hoge Dijk</div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>+ 5</div>
                <div>100%</div>
                <div>90%</div>
                <div>1.8</div>
            </div>
        </div>
    )
}

export default Round