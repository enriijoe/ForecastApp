import * as React from "react";
import {render} from "react-dom";

import {Root} from "application/view/Root";

import {log} from "application/utill";
import {appConfig} from "application/config";

export class Application {

  constructor() {
    log.info("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=.");
    log.info("New application has been started.");
    log.info("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=.");
  }

  public render(): void {
    if(appConfig.rootElement === null) {
      throw new Error("Unable to find application root element...");
    } else {
      render(<Root/>, appConfig.rootElement);
    }
  }

}
