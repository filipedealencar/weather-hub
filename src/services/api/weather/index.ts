import WeatherDto, { WeatherDataDto } from "@/dto/Weather";
import { IHttpResponse } from "../../data/IHttpClient";
import { SWRHttpClient } from "../../http/SWRHttpClient";

export default class WeatherApi {
  private baseUrl = "";
  private apiKey = "";

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_APIS_BASE_URL
      ? `${process.env.NEXT_PUBLIC_APIS_BASE_URL}`
      : this.baseUrl;
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY ?? "";
  }

  private getCurrentWeatherEndpoint = (coord: { lon: number; lat: number }) => {
    return `${this.baseUrl}/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${this.apiKey}&units=metric`;
  };
  private getForecastWeatherEndpoint = (coord: {
    lon: number;
    lat: number;
  }) => {
    return `${this.baseUrl}/forecast?lat=${coord.lat}&lon=${coord.lon}&cnt=8&appid=${this.apiKey}&units=metric`;
  };

  getCurrentWeather = (coord: {
    lon: number;
    lat: number;
  }): IHttpResponse<WeatherDto, unknown> => {
    const { data, error } = SWRHttpClient.useGet<WeatherDto>(
      this.getCurrentWeatherEndpoint(coord)
    ) as IHttpResponse<WeatherDto, unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };

  getForecastWeather = (coord: {
    lon: number;
    lat: number;
  }): IHttpResponse<WeatherDataDto, unknown> => {
    const { data, error } = SWRHttpClient.useGet<WeatherDataDto>(
      this.getForecastWeatherEndpoint(coord)
    ) as IHttpResponse<WeatherDataDto, unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };
}
