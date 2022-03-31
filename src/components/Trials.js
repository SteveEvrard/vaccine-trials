import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Trials = () => {

    const handleClickOne = () => {
        window.open('https://connect.trialscope.com/studies/987f177e-3bbe-435c-96ce-36623394c929?pv=1');
    }
    const handleClickTwo = () => {
        window.open('https://connect.trialscope.com/studies/f359082a-45df-4e6b-8eb2-1a9cf8c06167?pv=1&utm_locale=en');
    }
    const handleClickThree = () => {
        window.open('https://connect.trialscope.com/studies/e742466b-6a93-489a-8da7-71d1903bb7a5?pv=1&utm_locale=en');
    }
    const handleClickFour = () => {
        window.open('https://connect.trialscope.com/studies/df6a5903-432d-4d02-b8fa-e8dd1526dfc3?pv=1&utm_locale=en');
    }
    const handleClickFive = () => {
        window.open('https://connect.trialscope.com/studies/9482d640-d324-4510-b378-177cacbb6e41?pv=1&utm_locale=en');
    }
    return (
        <div style={{marginTop: '3vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{width: '100vw', marginBottom: '2vw'}}>
                <Typography sx={{fontSize: '2.5vw'}} component='h1'>Want to help advance vaccine research?</Typography>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '1.5vw', width: '80%'}} component='p'>Moderna is developing new mRNA vaccines for many viruses, in addition to COVID-19! These vaccine research studies need volunteers to join the research in order to become approved for widespread use. Most studies pay volunteers, and you can quit at any time!</Typography>
                </div>
            </div>
            <Card onClick={handleClickOne} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'white', marginRight: '2vw', marginLeft: '2vw', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography sx={{fontWeight: 600}}>Ages 1-5</Typography>
                    <Typography sx={{fontWeight: 600}}>RSV</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickTwo} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'white', marginRight: '2vw', marginLeft: '2vw', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography sx={{fontWeight: 600}}>Ages 60+</Typography>
                    <Typography sx={{fontWeight: 600}}>RSV</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickThree} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'white', marginRight: '2vw', marginLeft: '2vw', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography sx={{fontWeight: 600}}>Ages 18-30</Typography>
                    <Typography sx={{fontWeight: 600}}>Epstein-Barr Mono Virus</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickFour} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'white', marginRight: '2vw', marginLeft: '2vw', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography sx={{fontWeight: 600}}>Women 16-49</Typography>
                    <Typography sx={{fontWeight: 600}}>Cytomegalovirus (CMV)</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickFive} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'white', marginRight: '2vw', marginLeft: '2vw', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography sx={{fontWeight: 600}}>Ages 6-10</Typography>
                    <Typography sx={{fontWeight: 600}}>COVID-19</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Trials;