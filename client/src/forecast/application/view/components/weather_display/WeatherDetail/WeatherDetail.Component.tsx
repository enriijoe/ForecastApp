import * as React from "react";
import {PureComponent} from "react";

import {IForecastItem} from "application/data/api/forecast/IForecastItem";

import "./WeatherDetail.Style.scss";

interface IWeatherDetailProps {
  detail: IForecastItem
}

export class WeatherDetail extends PureComponent<IWeatherDetailProps> {

  public render(): JSX.Element {
    const detail: IForecastItem = this.props.detail;

    return (
      <div className={"weather-detail-element"}>

        <div className={"weather-detail-element-heading"}>
          <b>{detail.dt_txt.split(" ")[0]}</b> <br/>
        </div>

        {detail.weather[0].main}<br/>

        <div>
          {(detail.main.temp - 273.15).toFixed(2)} C
        </div>

      </div>
    )
  }

}