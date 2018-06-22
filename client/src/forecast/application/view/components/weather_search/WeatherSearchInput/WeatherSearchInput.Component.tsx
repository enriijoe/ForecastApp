import * as React from "react";
import {Component} from "react";

import {log} from "application/utill";
import {FormControl, FormGroup, Glyphicon, Grid, InputGroup} from "react-bootstrap";

import "./WeatherSearchInput.Style.scss";

interface IWeatherSearchInputProps {
  onRedirectRequest: (url: string) => void;
}

interface IWeatherSearchInputState {
  value: string;
  hasError: boolean;
}

export class WeatherSearchInput extends Component<IWeatherSearchInputProps, IWeatherSearchInputState> {

  public static isValidCity(cityName: string): boolean {
    return WeatherSearchInput.validCityNameRegex.test(cityName) && cityName.trim() !== "";
  }

  private static readonly validCityNameRegex: RegExp = /^[a-z ,.'-]{2,15}$/i;

  public readonly state: IWeatherSearchInputState = {
    hasError: false,
    value: ""
  };

  public render(): JSX.Element {
    return (
    <Grid className={"weather-search-form"} fluid>

      <FormGroup onKeyUp={(e: any) => this.handleEnterKeyPress(e.keyCode)} validationState={this.state.hasError ? "error" : null}>

        <InputGroup>

          <FormControl value={this.state.value} onChange={(e: any) => this.handleInputChange(e.target.value)} type="text"/>
          <InputGroup.Addon className={"cursor-pointer"} onClick={() => this.navigateToSearchPage()}>
            <Glyphicon glyph="search"/>
          </InputGroup.Addon>

        </InputGroup>

      </FormGroup>

    </Grid>
    );
  }

  private navigateToSearchPage(): void {
    if (!this.state.hasError && this.state.value.trim() !== "") {
      log.info("Navigating to forecast page...");
      this.props.onRedirectRequest(`/forecast?city=${this.state.value}`);
    }
  }

  private handleEnterKeyPress(keyCode: number) {
    if (keyCode === 13) {
      this.navigateToSearchPage();
    }
  }

  private handleInputChange(value: string): void {
    this.setState(Object.assign({}, this.state, {value, hasError: !WeatherSearchInput.isValidCity(value)}));
  }

}
