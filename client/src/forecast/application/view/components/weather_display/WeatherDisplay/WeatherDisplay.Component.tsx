import * as React from "react";
import {PureComponent} from "react";

import {Col, Grid, Row} from "react-bootstrap";

import {ForecastApiResponse} from "application/data/api/forecast/ForecastApiResponse";
import {WeatherMap} from "application/view/components/weather_display/WeatherMap";

import "./WeatherDisplay.Style.scss";
import {WeatherDetail} from "application/view/components/weather_display/WeatherDetail";
import {IForecastItem} from "application/data/api/forecast/IForecastItem";

interface IWeatherDisplayProps {
  city: string;
  forecast: ForecastApiResponse;
}

export class WeatherDisplay extends PureComponent<IWeatherDisplayProps> {

  private renderError(): JSX.Element {
    return (
    <Row className={"weather-display-forecast"}>
      <h2>
        Unexpected api error happened. Probably, you've entered wrong name ('{this.props.city}').
      </h2>
    </Row>
    );
  }

  private renderWeather(): JSX.Element {
    const forecast: ForecastApiResponse = this.props.forecast;

    return (
    <Grid fluid className={"weather-display-forecast"}>

      <Row className={"weather-display-weather-container full-height"}>
        <Col xs={3}>

          <b>City:</b> {forecast.city} <br/>
          <b>Country:</b> {forecast.country}

        </Col>

        <Col xs={9}>
          {this.renderWeatherDetails(forecast.forecast)}
        </Col>

      </Row>

      <Row className={"weather-display-map-container"}>
        {React.createElement(WeatherMap, {coord: forecast.coord} as any)}
      </Row>

    </Grid>
    );
  }

  private renderWeatherDetails(details: IForecastItem[]): JSX.Element {

    const detailsElements: JSX.Element[] = [];

    const daysCount: number = 5;
    const increment = Math.round(details.length / daysCount);

    for(let i: number = 0; i < details.length; i += increment) {
      detailsElements.push(<WeatherDetail key={"forecast-" + i} detail={details[i]}/>)
    }

    return (
    <Row className={"full-height"}>
      {detailsElements}
    </Row>
    );
  }

  public render(): JSX.Element {
    if(this.props.forecast === null) {
     return this.renderError();
    } else {
      return this.renderWeather();
    }
  }

}