import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '260px',
            height: '48px'
        },
    },
}));
export default function Email({emailValue, emailRequired}) {
    const classes = useStyles();
    return (
        <TextField
            onChange={(event) => emailValue(event)}
            className={classes.root}
            error={emailRequired}
            id="outlined-basic"
            label="Email address"
            variant="outlined"
        />
    )
}
