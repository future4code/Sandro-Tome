import React from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Avatar from '@material-ui/core/Avatar';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { goToManagePage, goToCreateTravelPage, goToLoginPage, goToListTravelPage, goToApprovePage} from "../../Routes/Coordinator";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(8),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fixedHeight: {
    height: 240,
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
}));

const CreateTravelPage = () => {
  const history = useHistory();

  const [inputTravel, onChangeInputTravel] = useInput({
    name: "", 
    planet: "", 
    date: "", 
    description: "", 
    durationInDays: ""
  })

  const token = localStorage.getItem("token")

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const createTravel = (event) => {
    event.preventDefault()

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sandro-epps/trips", inputTravel,
      {
        headers: {
          auth: token
        }
      }
    )
    .then((res) => {
      goToListTravelPage(history)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => goToManagePage(history)}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => goToListTravelPage(history)}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Viagens Criadas" />
          </ListItem>
          <ListItem button onClick={() => goToCreateTravelPage(history)}>
            <ListItemIcon>
              <PlaylistAddIcon />
            </ListItemIcon>
            <ListItemText primary="Criar Viagens" />
          </ListItem>
          <ListItem button onClick={() => goToApprovePage(history)}>
            <ListItemIcon>
              <HowToRegIcon />
            </ListItemIcon>
            <ListItemText primary="Aprovações" />
          </ListItem>
        </List>
        <Divider />
        <List> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => goToLoginPage(history)}
          >
            Sair
          </Button>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Card para fomularios de criaçao e aprovação, e lista de viagens */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <FlightTakeoffOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Crie uma viagem
              </Typography>
                <form className={classes.form} noValidate onSubmit={createTravel}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        value={inputTravel.name}
                        onChange={onChangeInputTravel}
                        autoComplete="fname"
                        name="travelName"
                        variant="outlined"
                        required
                        fullWidth
                        id="travelName"
                        label="Nome da viagem"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={inputTravel.planet}
                        onChange={onChangeInputTravel}
                        variant="outlined"
                        required
                        fullWidth
                        name="planet"
                        label="Planeta"
                        id="planet"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={inputTravel.date}
                        onChange={onChangeInputTravel}
                        variant="outlined"
                        required
                        fullWidth
                        name="date"
                        label="Data"
                        id="date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={inputTravel.durationInDays}
                        onChange={onChangeInputTravel}
                        variant="outlined"
                        required
                        fullWidth
                        name="duration"
                        label="Duração (em dias)"
                        id="duration"
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                      value={inputTravel.description}
                      onChange={onChangeInputTravel}
                      label="Descrição (opcional)"
                      id="outlined-size-normal"
                      variant="outlined"
                      fullWidth
                    />
                    </Grid>    
                  </Grid>
                  <Grid container>
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
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default CreateTravelPage;