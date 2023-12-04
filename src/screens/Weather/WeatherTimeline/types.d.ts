import WeatherDto, { WeatherDataDto } from "@/dto/Weather";

interface IWeatherTimeline {
  options: {
    data: WeatherDto;
    forecast: WeatherDataDto;
  };
}
