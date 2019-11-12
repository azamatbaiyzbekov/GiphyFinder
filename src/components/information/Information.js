import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Search for your favorite GIFs
      </Typography>
      <Typography component="p">
        - Select the amount of GIF's you prefer to display
      </Typography>
      <Typography component="b">
        - Type and Hit Enter | Zoom in 
      </Typography>
      
    </Paper>
  );
}