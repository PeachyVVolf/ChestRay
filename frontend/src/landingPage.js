//Landing page. Renders only login and sign up buttons 

import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './css/LandingPageStyles';

const LandingPage = (props) => {
    const { classes } = props;
    
    const token = sessionStorage.getItem("token");

    return ( 
        <div>
            <div>
                <br />
                <a data-inline="true" className={classes.logoText}>ChestRay</a>
                <a href="/login" data-role="button" data-inline="true" className={classes.logoButton1}>LOG IN</a>
                <a href="/register" data-role="button" data-inline="true" className={classes.logoButton}>SIGN UP</a><br /><br />
                <div className={classes.mainBody}>
                    <h1 className={classes.welcomeMsg}>Welcome to ChestRay</h1>
                    <p className={classes.welcomeText}>Upload your Chest Xrays and get detailed analysis in one click</p>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(LandingPage);