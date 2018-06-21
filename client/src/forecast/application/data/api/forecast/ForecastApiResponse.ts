import {IForecastLocation} from "application/data/api/forecast/IForecastLocation";
import {IForecastItem} from "application/data/api/forecast/IForecastItem";


export class ForecastApiResponse {

  public readonly city: string;
  public readonly country: string;
  public readonly coord: IForecastLocation;

  public readonly forecast: IForecastItem[];

  public constructor(rawResponse: any) {

    if(rawResponse.cod != 200) {
      throw new Error("Bad api request with code " + rawResponse.cod);
    }

    this.city = rawResponse.city.name;
    this.country = rawResponse.city.country;
    this.coord = rawResponse.city.coord;
    this.forecast = [];
  }

}