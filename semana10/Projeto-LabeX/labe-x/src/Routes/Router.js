import React from "react";
import HomePage from "../Pages/Home/HomePage";
import AvailablesTravels from "../Pages/AvailablesTravels/AvailablesTravelsPage";
import Login from "../Pages/Login/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManagePage from "../Pages/ManagePage/ManagePage";
import SignUp from "../Pages/SignUp/SignUpPage";
import CreateTravel from "../Pages/ManagePage/CreateTravelPage";
import ListTravel from "../Pages/ManagePage/ListTravelPage";
import ApproveTravel from "../Pages/ManagePage/ApprovePage";
import FormPage from "../Pages/AplicationForm/FormPage";


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/viagens-disponiveis"}>
          <AvailablesTravels />
        </Route>
        <Route exact path={"/viagens-disponiveis/aplicacao"}>
          <FormPage />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/cadastro"}>
          <SignUp />
        </Route>
        <Route exact path={"/login/gerenciador"}>
          <ManagePage />
        </Route>
        <Route exact path={"/login/gerenciador/viagens-criadas"}>
          <ListTravel />
        </Route>
        <Route exact path={"/login/gerenciador/criar-viagem"}>
          <CreateTravel />
        </Route>
        <Route exact path={"/login/gerenciador/aprovacao"}>
          <ApproveTravel />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
