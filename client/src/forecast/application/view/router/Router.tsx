import * as React from "react";
import {Component} from "react";

import {Route, BrowserRouter, Switch} from "react-router-dom";
import {IndexPage} from "application/view/layout/IndexPage";
import {SearchPage} from "application/view/layout/SearchPage";
import {ErrorPage} from "application/view/layout/ErrorPage";

export class Router extends Component<null, null> {

  public render(): JSX.Element {
    return (
    <BrowserRouter>

      <Switch>

        <Route exact={true} path={"/"} component={IndexPage}/>
        <Route exact={true} path={"/home"} component={IndexPage}/>
        <Route exact={true} path={"/search"} component={SearchPage}/>

        <Route component={ErrorPage}/>

      </Switch>
    </BrowserRouter>
    );
  }

}