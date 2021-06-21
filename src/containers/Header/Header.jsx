import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.styles.scss';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className="name" />
          <img
            src={
              'https://inomma.com/img/xfavicon.png,qv=2.pagespeed.ic.ni186O_gcY.webp'
            }
            alt="Header Logo"
            className={classes.logo}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
