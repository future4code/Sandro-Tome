import React from "react";
import HomePage from "../Pages/Home/HomePage";
import OnTravelsPage from "../Pages/AvailablesTravels/OnTravelsPage";
import Login from "../Pages/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManagePage from "../Pages/ManagePage/ManagePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/viagens-disponiveis"}>
          <OnTravelsPage />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/login/gerenciador"}>
          <ManagePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
