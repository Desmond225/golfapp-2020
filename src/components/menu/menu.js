import React from 'react';

const Menu = ({onRouteChange}) => {
    return (
    <div className={{display: 'flex', flexDirection: 'column'}}>
    <button onClick={() => onRouteChange('entry')} className='f4 w-100 link dim ph4 pv2 dib white bg-blue tl'>Play golf</button>
    <button className='f4 w-100 link dim ph4 pv2 dib white bg-blue tl'>Book teetimes (coming soon)</button>
    <button className='f4 w-100 link dim ph4 pv2 dib white bg-blue tl'>Learn more (coming soon)</button>
    </div>
    )
}

export default Menu