import { Box, makeStyles, Typography } from '@material-ui/core';




const useStyles = makeStyles({
    component: {
        margin: '30px 60px'
    },
    container: {
        display: 'flex',
    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2,
    },
    value: {
        color: '#fff'
    },
    icon: {
        color: 'darkred',
        marginRight: 15
    },
    error: {
        background: 'red',
        color: '#fff',
        margin: 50,
        padding: 20
    }
})


export default function Info({data}) {
    const classes=useStyles();
    return (
       data ?
        <Box className={classes.component}>
            <Typography>City:{data.name}</Typography>
            <Typography>Country:{data.sys.country}</Typography>
            <Typography>Tempreture:{data.main.temp}C</Typography>
            <Typography>Humidity:{data.main.humidity}</Typography>
            <Typography>SunRise:{new Date(data.sys.sunrise).toLocaleTimeString()}</Typography>
        </Box>:" "
    )
}
