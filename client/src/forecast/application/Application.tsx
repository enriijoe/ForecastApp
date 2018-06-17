import * as React from "react";
import {render} from "react-dom";

import {Root} from "application/view/Root";

import {log} from "application/utill";
import {appConfig} from "application/config";
import {forecastApiManager} from "application/data/api";

export class Application {

  constructor() {
    log.info("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=.");
    log.info("New application has been started.");
    log.info("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=.");
    this.test();
  }

  // todo: remove this
  public async test(): Promise<void> {
    const forecast: string = await forecastApiManager.getCityForecast("Kiev");
    log.info(JSON.stringify(forecast));
  }

  public render(): void {
    if(appConfig.rootElement === null) {
      throw new Error("Unable to find application root element...");
    } else {
      render(<Root/>, appConfig.rootElement);
    }
  }

}
