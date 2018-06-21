import * as React from "react";
import {PureComponent} from "react";

import {Col, Grid, Row} from "react-bootstrap";

import {ForecastApiResponse} from "application/data/api/forecast/ForecastApiResponse";
import {WeatherMap} from "application/view/components/WeatherMap";

import "./WeatherDisplay.Style.scss";


interface IWeatherDisplayProps {
  city: string;
  forecast: ForecastApiResponse;
}

export class WeatherDisplay extends PureComponent<IWeatherDisplayProps> {

  public render(): JSX.Element {

    const forecast: ForecastApiResponse = this.props.forecast;

    if(forecast === null) {
      return (
      <Row className={"weather-display-forecast"}>
        <h2>
          Unexpected api error happened. Probably, you've entered wrong name ('{this.props.city}').
        </h2>
      </Row>
      );
    }

    return (
      <Grid fluid className={"weather-display-forecast"}>

        <Row className={"weather-display-weather-container"}>
          <Col xs={3}>

            <b>City:</b> {forecast.city} <br/>
            <b>Country:</b> {forecast.country}

          </Col>

          <Col xs={9}>
            1233
          </Col>

        </Row>

        <Row className={"weather-display-map-container"}>
          {React.createElement(WeatherMap, {coord: forecast.coord} as any)}
        </Row>

      </Grid>
    );
  }

}