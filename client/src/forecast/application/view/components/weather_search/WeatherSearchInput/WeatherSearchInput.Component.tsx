import * as React from "react";
import {Component} from "react";

import {FormControl, FormGroup, Glyphicon, Grid, InputGroup} from "react-bootstrap";
import {log} from "application/utill/index";

import "./WeatherSearchInput.Style.scss";

interface IWeatherSearchInputProps {
  onRedirectRequest: (url: string) => void
}

interface IWeatherSearchInputState {
  value: string;
}

export class WeatherSearchInput extends Component<IWeatherSearchInputProps, IWeatherSearchInputState> {

  public static isValidCity(cityName: string): boolean {
    return cityName !== "";
  }

  public readonly state: IWeatherSearchInputState = {
    value: "",
  };

  private navigateToSearchPage(): void {
    log.info("Navigating to forecast page...");

    if(WeatherSearchInput.isValidCity(this.state.value)) {
      this.props.onRedirectRequest(`/forecast?city=${this.state.value}`)
    }
  }

  private handleEnterKeypress(keyCode: number) {
    if(keyCode === 13) {
      this.navigateToSearchPage();
    }
  }

  private handleInputChange(value: string): void {
    this.setState(Object.assign({}, this.state, {value}));
  }

  public render(): JSX.Element {
    return (
    <Grid className={"weather-search-form"} fluid>

      <FormGroup onKeyUp={(e: any) => this.handleEnterKeypress(e.keyCode)}>

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

}