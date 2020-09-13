import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 660,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Basket() {
  const classes = useStyles();

  return (
      <div>

    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary={`Development in progress`} />
      </ListItem>
      <Divider  dark/>
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider  dark/>
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem>
        <ListItemText/>
      </ListItem>
    </List>
      </div>
  );
}


export default Basket;