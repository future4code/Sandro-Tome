import React from 'react';

import { useHistory } from "react-router-dom";
import { goToLoginPage, goToOnTravelsPage, goToHomePage } from "../../Routes/Coordinator";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
      },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        },
    },
}));

const FormPage = () => {
    const classes = useStyles();
    const history = useHistory()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography onClick={() => goToHomePage(history)} variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            LabeX
          </Typography>
          <Button href="#" onClick={() => goToOnTravelsPage(history)} color="primary" variant="outlined" className={classes.link}>
            Destinos
          </Button>
          <Button href="#" onClick={() => goToLoginPage(history)} color="primary" variant="outlined" className={classes.link}>
            Cadastrar
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FlightTakeoffOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Preencha o formulário
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="completeName"
                variant="outlined"
                required
                fullWidth
                id="completeName"
                label="Nome completo"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="age"
                label="Idade"
                id="age"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="occupation"
                label="Ocupação"
                id="occupation"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="country"
                label="País"
                id="country"
              />
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <InputLabel fullWidth id="selecao-viagens">Viagens</InputLabel>
                    <Select>
                        <p>kkkkkkkasdddddddddddddddddddddd</p>
                    </Select>
                </FormControl>
            </Grid>    
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => goToLoginPage(history)}
          >
            Tudo certo!
          </Button>
        </form>
      </div>
      </Container>
      
    </React.Fragment>
  );
}

export default FormPage;