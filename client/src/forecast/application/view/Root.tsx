import * as React from "react";
import {Component} from "react";

import {Router} from "application/view/router/Router";
import {log} from "application/utill";

export class Root extends Component<null, null> {

  public constructor(props: any) {
    super(props);

    log.info("Application root has started rendering.");
  }

  public render(): JSX.Element {
    return (
      <Router/>
    );
  }

}