export interface IForecastItem {

  main: {
    humidity: number;
    pressure: number;

    temp: number;
    temp_max: number;
    temp_min: number;
  }

  weather: {
    description: string;
    main: string;
  }

  wind: {
    speed: number;
    degree: number;
  }

}