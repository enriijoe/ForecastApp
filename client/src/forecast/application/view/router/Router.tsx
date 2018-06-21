import * as React from "react";
import {PureComponent} from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";

import {IndexPageComponent} from "application/view/pages/IndexPage/IndexPage.Component";
import {ForecastPage} from "application/view/pages/ForecastPage/ForecastPage.Component";
import {ErrorPage} from "application/view/pages/ErrorPage";

export class Router extends PureComponent<null, null> {

  public render(): JSX.Element {
    return (
    <BrowserRouter>

      <Switch>

        <Route exact={true} path={"/"} component={IndexPageComponent}/>
        <Route exact={true} path={"/home"} component={IndexPageComponent}/>
        <Route exact={true} path={"/forecast"} component={ForecastPage}/>

        <Route component={ErrorPage}/>

      </Switch>
    </BrowserRouter>
    );
  }

}