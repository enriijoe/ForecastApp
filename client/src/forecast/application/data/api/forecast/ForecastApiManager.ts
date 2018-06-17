import {appConfig} from "application/config";


export class ForecastApiManager {

  private static buildRequestUrl(cityName: string): string {
    return `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${appConfig.forecastAPIKey}`;
  }

  public async getCityForecast(cityName: string): Promise<any> {
    const response: any = await fetch(ForecastApiManager.buildRequestUrl(cityName));
    return response.json();
  }

}