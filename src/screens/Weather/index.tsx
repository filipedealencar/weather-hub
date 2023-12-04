import { ArrowLeftIcon, IconCloud } from "@/icons";
import {
  ContainerArrowLeft,
  ContainerWeather,
  ContentTitle,
  ContentWeather,
  TitleCity,
  TitleTypeWeather,
  WrapperWeather,
} from "./styles";
import { DegressValue } from "./DegreesValue";
import { WeatherTimeline } from "./WeatherTimeline";
import WeatherDto, { WeatherDataDto } from "@/dto/Weather";
import { GlobalContext } from "@/contexts/GlobalContext";
import WeatherApi from "@/services/api/weather";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Weather: React.FC = ({}) => {
  const router = useRouter();
  const { lat, lon } = router.query;
  const [dataWeather, setDataWeather] = useState<
    WeatherDto | null | undefined
  >();
  const { setClimaticCondition } = useContext(GlobalContext);

  const weatherData = new WeatherApi();

  const { data } = weatherData.getCurrentWeather({
    lat: Number(lat),
    lon: Number(lon),
  });

  useEffect(() => {
    setDataWeather(data);
    setClimaticCondition(data?.weather[0]?.main ?? "");
  }, [data]);

  const { data: forecast } = weatherData.getForecastWeather({
    lat: Number(lat),
    lon: Number(lon),
  });

  console.log("data ", data);
  console.log("forecast ", forecast);

  return (
    <WrapperWeather>
      <ContainerArrowLeft onClick={() => router.push(`/`)}>
        <ArrowLeftIcon />
      </ContainerArrowLeft>
      <ContainerWeather>
        <ContentWeather>
          <ContentTitle>
            <TitleCity>{dataWeather?.name}</TitleCity>
            <TitleTypeWeather>{dataWeather?.weather[0].main}</TitleTypeWeather>
          </ContentTitle>
          <DegressValue
            value={Math.round(Number(data?.main.temp)) ?? 0}
            weatherUp={Math.round(Number(data?.main.temp_max)) ?? 0}
            weatherDown={Math.round(Number(data?.main.temp_min)) ?? 0}
          />
          <IconCloud
            width={150}
            height={150}
            types={dataWeather?.weather[0].icon ?? "01d"}
          />
        </ContentWeather>
        <WeatherTimeline
          options={{
            data: data ?? ([] as any),
            forecast: forecast ?? ([] as any),
          }}
        />
      </ContainerWeather>
    </WrapperWeather>
  );
};

export default Weather;
