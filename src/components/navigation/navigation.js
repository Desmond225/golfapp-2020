import React from 'react';
import logo from './logo.png';

const Navigation = ({onRouteChange}) => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <img alt="logo" src={logo} style={{paddingTop: '10px', width: '100px'}}/>
                <div style={{padding: '1rem', transform: 'rotate(90deg)'}}>...</div>
            </div>
            <nav style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', color: 'white', padding: '0 2rem'}}>
                <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('roundlist')}
                    >
                        Show rounds
                </p>
                <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('home')}
                    >
                        Home</p>
                <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('statistics')}
                    >
                        Statistics</p>
            </nav>
        </div>
    )
}

export default Navigation