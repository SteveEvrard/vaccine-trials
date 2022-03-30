import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Trials = () => {

    const handleClickOne = () => {
        window.open('https://connect.trialscope.com/studies/987f177e-3bbe-435c-96ce-36623394c929?pv=1');
    }
    const handleClickTwo = () => {
        window.open('https://connect.trialscope.com/studies/987f177e-3bbe-435c-96ce-36623394c929?pv=1');
    }
    const handleClickThree = () => {
        window.open('https://connect.trialscope.com/studies/e742466b-6a93-489a-8da7-71d1903bb7a5?pv=1&utm_locale=en');
    }
    const handleClickFour = () => {
        window.open(' https://connect.trialscope.com/studies/df6a5903-432d-4d02-b8fa-e8dd1526dfc3?pv=1&utm_locale=en');
    }
    return (
        <div style={{marginTop: '3vw', display: 'flex', flexWrap: 'wrap'}}>
            <Card onClick={handleClickOne} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'lightblue', marginRight: 'auto', marginLeft: 'auto', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography>RSV</Typography>
                    <Typography>Ages 1-5 or 18-49</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickTwo} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'lightblue', marginRight: 'auto', marginLeft: 'auto', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography>RSV</Typography>
                    <Typography>Ages 60+</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickThree} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'lightblue', marginRight: 'auto', marginLeft: 'auto', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography>Epstein-Barr Virus</Typography>
                    <Typography>Ages 18-30</Typography>
                </CardContent>
            </Card>
            <Card onClick={handleClickFour} sx={{minWidth: '150px', minHeight: '150px', marginBottom: '10px', backgroundColor: 'lightblue', marginRight: 'auto', marginLeft: 'auto', width: '20vw', cursor: 'pointer'}}>
                <CardContent>
                    <Typography>Cytomegalovirus (CMV)</Typography>
                    <Typography>Women 16-49</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Trials;