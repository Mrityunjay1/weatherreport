import React,{useEffect,useState} from 'react'
import {Box,TextField,Button,makeStyles} from '@material-ui/core'
import getData from '../service/api';
import Info from './Info'
const useStyles = makeStyles({
    component: {
        padding: 10,
        display: 'flex',
    },
    input: {
        color: '#0f0f0f',
        marginRight: 15,
        fontWeight:600
    },
    labelRoot: {
        fontSize: 15,
        color: '#fff'
    },
    button: {
        background: '#e67e22',
        color: '#fff',
        width: 150,
        height: 40,
        marginTop: 5
    }
})

export default function Form() {
    const classes =useStyles();
    const[data,setData]=useState();
    const[city,setCity]=useState('');
    const[country,setCountry]=useState('');
    const[click,handleClick]=useState(false)
    useEffect(()=>{
        const getWeather = async ()=>{
        city && await getData(city,country).then(response=>{
            setData(response.data);
            console.log(response.data);
        })
    }
        getWeather();
        handleClick(false);
    },[click]);

    const handleCityChange=(value)=>{
        setCity(value);
    }
    const handleCountryChange=(value)=>{
        setCountry(value);
    }


    return (
        <>
        <Box className={classes.component}>
            <TextField
                onChange={(e)=>handleCityChange(e.target.value)}
                label="City"
                inputprops={{className: classes.input}}
                className={classes.input}
            />
            <TextField 
                onChange={(e)=>handleCountryChange(e.target.value)}
                label="Country"
                inputprops={{className: classes.input}}
                className={classes.input}
            />
            <Button variant="contained" className={classes.button} onClick={()=>handleClick(true)}>Get Weather</Button>
        </Box>
        <Info data={data} />
        </>
    )
}
