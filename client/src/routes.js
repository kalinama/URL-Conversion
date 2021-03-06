import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {LinksTopPage} from "./pages/LinkTopPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact >
          <LinksPage />
        </Route>

        <Route path="/create" exact >
          <CreatePage />
        </Route>

        <Route path="/" exact >
          <LinksTopPage />
        </Route>

        <Route path="/detail/:id" exact >
          <DetailPage/>
        </Route>

        <Redirect to="/create" />
      </Switch>
    );
  } else if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>

        <Route path="/" exact >
          <LinksTopPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  }
};
