import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
  goToLoginPage,
  goToOnTravelsPage,
  goToHomePage,
} from "../../Routes/Coordinator";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FlightTakeoffOutlinedIcon from "@material-ui/icons/FlightTakeoffOutlined";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MenuItem } from "@material-ui/core";
import { useForm } from "../../Hooks/useForm";
import { useTravelList } from "../../Hooks/useTravelsList";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
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
    width: "100%",
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
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const FormPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const travels = useTravelList()

  const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const onSubmitApplication = (e) => {
    e.preventDefault()
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sandro-epps/trips/${form.trip.id}/apply`, body)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            onClick={() => goToHomePage(history)}
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            LabeX
          </Typography>
          <Button
            href="#"
            onClick={() => goToOnTravelsPage(history)}
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Destinos
          </Button>
          <Button
            href="#"
            onClick={() => goToLoginPage(history)}
            color="primary"
            variant="outlined"
            className={classes.link}
          >
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
          <form className={classes.form} onSubmit={onSubmitApplication}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  onChange={onChangeInput}
                  name={'name'}
                  value={form['name']}
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
                  onChange={onChangeInput}
                  name={'age'}
                  value={form['age']}
                  variant="outlined"
                  required
                  fullWidth
                  label="Idade"
                  id="age"
                  type='number'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={onChangeInput}
                  name={'profession'}
                  value={form['profession']}
                  label="Ocupação"
                  id="occupation"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="selecao-paises">Países</InputLabel>
                  <Select 
                    labelId="selecao-paises"
                    onChange={onChangeInput}
                    name={'country'}
                    value={form['country']}
                  >
                    <MenuItem value="1">Brasil</MenuItem>
                    <MenuItem value="2">Alemanha</MenuItem>
                    <MenuItem value="3">Estados Unidos</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="selecao-viagens">Viagens</InputLabel>
                  <Select 
                    labelId="selecao-viagens"
                    onChange={onChangeInput}
                    name={'trip'}
                    value={form['trip']}
                  >
                    {travels.map((travel) =>{
                      return <MenuItem value={travel}>{travel.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Texto de aplicação"
                  fullWidth
                  onChange={onChangeInput}
                  name={'application'}
                  value={form['application']}
                />
              </Grid>
            </Grid>
            <Button
              type={'submit'}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Tudo certo!
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FormPage;