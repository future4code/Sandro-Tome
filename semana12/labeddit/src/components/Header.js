import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goBack, goToLogin } from '../routes/Coordinator';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
  }

  const buttonLogoutAction = () => {
    if (token) {
      logout()
      goToLogin(history)
    } else {}
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => goBack(history)}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Labeddit
          </Typography>
          <Button color="inherit" onClick={buttonLogoutAction}>Sair</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header