import * as React from "react";
import {PureComponent} from "react";
import {compose, withProps} from "recompose"

import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps"
import {IForecastLocation} from "application/data/api/forecast/IForecastLocation";

interface IWeatherMapProps {
  coord: IForecastLocation
}

// todo: google 'wrap' typing is awful
class WeatherMapComponent extends PureComponent<any> {

  public render(): JSX.Element {
    return (
      <GoogleMap
      defaultZoom={8}
      defaultCenter={{lat: this.props.coord.lat, lng: this.props.coord.lon}}
      >
        <Marker position={{lat: this.props.coord.lat, lng: this.props.coord.lon}}/>
      </GoogleMap>
    );
  }

}

export const WeatherMap = compose(
withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />,
}),
withScriptjs,
withGoogleMap
)(WeatherMapComponent);