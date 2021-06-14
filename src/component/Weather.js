import React from 'react'
import {Box, makeStyles} from '@material-ui/core'
import logo from '../images/1.jpg';
import Form from './Form';

const useStyles=makeStyles({
    component:{
            height:'100vh',
            display:'flex',
            alignItems:'center',
            width:'60%',
            margin: '0 auto'
    },
    leftContainer:{
    backgroundImage:`url(${logo})`,
    height:'80%',
    width:'30%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'
    },
    rightContainer:{
        background:'linear-gradient(to right,lightgray, #e67e22)',
        height:'80%',
        width:'70%'
    }
})

export default function Weather() {
    const classes=useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}>
            </Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}
