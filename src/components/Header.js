import React from 'react'

const Header = () => {
    return (
        <div style={{backgroundColor: '#3a5daa', height: '8vw', display: 'flex', textAlign: 'center', width: '100vw'}}>
            <div style={{position: 'absolute', height: '8vw', marginTop: '5px'}}>
                <img alt='logo' src="Logo.png" style={{height: 'inherit'}}/>
            </div>
            <div style={{width: '100vw', margin: 'auto', color: 'white', fontFamily: 'Cairo', fontSize: '3vw'}}>
                Vaccine Trials
            </div>
        </div>
    )
}

export default Header;