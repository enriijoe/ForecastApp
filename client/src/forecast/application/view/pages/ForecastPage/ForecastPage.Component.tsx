import * as React from "react";
import {PureComponent} from "react";

import {Button, Clearfix, Col, Glyphicon, Grid, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GeneralLayout} from "application/view/layout/general/GeneralLayout";
import {WeatherSearchInput} from "application/view/components/weather_search/WeatherSearchInput/WeatherSearchInput.Component";

import "./ForecastPage.Style.scss";
import {RingLoader} from "react-spinners";
import {forecastApiManager} from "application/data/api";
import {log} from "application/utill";
import {ForecastApiResponse} from "application/data/api/forecast/ForecastApiResponse";
import {WeatherDisplay} from "application/view/components/weather_display/WeatherDisplay";


interface IForecastPageState {
  loading: boolean;
  weather: ForecastApiResponse;
}

export class ForecastPage extends PureComponent<any, IForecastPageState> {

  private getSearchedCity(): string {
    const params: URLSearchParams = new URLSearchParams(this.props.location.search);
    return params.get('city');
  }

  public readonly state: IForecastPageState = {
    loading: false,
    weather: null
  };

  public componentWillMount() {
    if(WeatherSearchInput.isValidCity(this.getSearchedCity()))
    this.loadWeatherDetails()
      .then(() => {});
  }

  public componentDidUpdate(prevProps: any, prevState: IForecastPageState) {
    if(prevProps.location.search !== this.props.location.search) {
      this.loadWeatherDetails()
      .then(() => {});
    }
  }

  private async loadWeatherDetails(): Promise<void> {
    log.info(`Loading weather details for ${this.getSearchedCity()}`);
    this.setState(Object.assign({}, this.state, {loading: true}));

    try {
      const weather = await forecastApiManager.getCityForecast(this.getSearchedCity());
      this.setState(Object.assign({}, this.state, {loading: false, weather: weather}));
    } catch(e) {
      log.error(`Failed to load weather info: ${e}.`);
      this.setState(Object.assign({}, this.state, {weather: null, loading: false}));
    }
  }

  public render(): JSX.Element {
    return (

      <GeneralLayout>

        <Grid id={"forecast-page"} fluid>

          <Row>
            <WeatherSearchInput onRedirectRequest={(url: string) => this.props.history.push(url)}/>
          </Row>

          <Row>
            {this.state.loading
            ? <Col xs={1} xsOffset={1} mdOffset={4}> <RingLoader color={'#123abc'} size={50} sizeUnit={"rem"} loading={this.state.loading}/> </Col>
            : <WeatherDisplay city={this.getSearchedCity()} forecast={this.state.weather}/>}
          </Row>

          <Row>
            <Link to={"/home"}>
              <Button className={"forecast-page-nav-back"}>
                <Glyphicon glyph={"arrow-left"}/>
                &nbsp;
                Go Back
              </Button>
            </Link>
          </Row>

        </Grid>

      </GeneralLayout>
    );
  }

}