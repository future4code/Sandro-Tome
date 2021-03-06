import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useForm from '../../hooks/useForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/requests';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://i.imgur.com/KJWy5TI.png?1)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginPage = () => {

    const classes = useStyles();

    const history = useHistory()

    useUnprotectedPage()

    const [form, onChange, clear] = useForm({email: '', password: ''})

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, history)
    }

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={onSubmitForm}>
              <TextField
                required
                fullWidth
                autoFocus
                variant="filled"
                margin="normal"
                label="Email cadastrado"
                type="email"
                autoComplete="email"
                name="email"
                value={form.email}
                onChange={onChange}
              />
              <TextField
                required
                fullWidth
                variant="filled"
                margin="normal"
                label="Senha"
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/cadastro" variant="body2">
                    {"Ainda não tem uma conta? Cadastre-se por aqui"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
}
