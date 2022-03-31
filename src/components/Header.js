import React from 'react'

const Header = () => {
    return (
        <div style={{backgroundColor: '#3a5daa', height: '8vw', display: 'flex', textAlign: 'center', width: '100vw'}}>
            <div style={{position: 'absolute', height: '8vw'}}>
                <img alt='logo' src="Logo.png" style={{height: 'inherit', marginTop: '5px'}}/>
                <img alt='logo' src="Moderna_logo.svg.png" style={{height: '6vw', marginBottom: '10px'}}/>
            </div>
            <div style={{width: '100vw', margin: 'auto', color: 'white', fontFamily: 'Cairo', fontSize: '3vw'}}>
                Vaccine Studies
            </div>
        </div>
    )
}

export default Header;