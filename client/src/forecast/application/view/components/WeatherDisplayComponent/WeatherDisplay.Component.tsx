import * as React from "react";
import {PureComponent} from "react";

import {Col, Row} from "react-bootstrap";

import {ForecastApiResponse} from "application/data/api/forecast/ForecastApiResponse";

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
      <Row className={"weather-display-forecast"}>

        <Col xs={3}>

          <b>City:</b> {forecast.city} <br/>
          <b>Country:</b> {forecast.country}

        </Col>

        <Col xs={9}>
          1233
        </Col>

      </Row>
    );
  }

}