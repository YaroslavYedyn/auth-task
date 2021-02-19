import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './input.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '260px',
            height: '48px'
        },
    },
}));
export default function Password({passwordValue,passwordRequired}) {
    const classes = useStyles();
    return (
        <form >
            <TextField
                onChange={(event)=>passwordValue(event)}
                id="outlined-basic"
                className={classes.root}
                error={passwordRequired}
                label="Password"
                variant="outlined"
            />
            {
                passwordRequired&&<p className={styles.required}>password required!</p>

            }
        </form>
    )
}
