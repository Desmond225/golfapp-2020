import React from 'react';
import logo from './logo.png';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <img alt="logo" src={logo} style={{paddingTop: '10px', width: '100px'}}/>
                <div style={{padding: '1rem', transform: 'rotate(90deg)'}}>...</div>
            </div>
            <nav style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', color: 'white', padding: '0 2rem'}}>
                {/* <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('roundlist')}
                    >Show rounds
                </p> */}
                <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('home')}
                    >Home</p>
                <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('signout')}>
                        Sign out</p>
                {/* <p 
                    className="f4 link dim pointer"
                    onClick={() => onRouteChange('statistics')}
                    >
                        Statistics</p> */}
            </nav>
        </div>
    )} else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signin')}>Sign in</p>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        )
    }
}

export default Navigation