import {appConfig} from "application/config";
import {ForecastApiResponse} from "application/data/api/forecast/ForecastApiResponse";

export class ForecastApiManager {

  private static buildRequestUrl(cityName: string): string {
    return `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${appConfig.forecastAPIKey}`;
  }

  public async getCityForecast(cityName: string): Promise<ForecastApiResponse> {
    const response: any = await fetch(ForecastApiManager.buildRequestUrl(cityName));
    return new ForecastApiResponse(await response.json());
  }

}