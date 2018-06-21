import * as React from "react";
import {PureComponent} from "react";

import {Router} from "application/view/router/Router";
import {log} from "application/utill";

export class Root extends PureComponent<null, null> {

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