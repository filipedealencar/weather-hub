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
import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";

const Weather: React.FC = ({}) => {
  const router = useRouter();
  const { lat, lon } = router.query;
  const [dataWeather, setDataWeather] = useState<
    WeatherDto | null | undefined
  >();
  const { setClimaticCod } = useContext(GlobalContext);
  const weatherData = new WeatherApi();
  const [loading, setLoading] = useState(true);
  const { data, isLoading, error } = weatherData.getCurrentWeather({
    lat: Number(lat),
    lon: Number(lon),
  });

  useEffect(() => {
    if (isLoading === false) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  useEffect(() => {
    setDataWeather(data);
    setClimaticCod(data?.weather?.[0]?.id ?? 800);

    if (String(data?.cod) === "400") {
      setTimeout(() => {
        router
          .replace("/")
          .then(() => toast.error("First, select a location."));
      }, 2100);
    }
  }, [data]);

  const { data: forecast } = weatherData.getForecastWeather({
    lat: Number(lat),
    lon: Number(lon),
  });

  return (
    <WrapperWeather>
      <ContainerArrowLeft onClick={() => router.push(`/`)}>
        <ArrowLeftIcon />
      </ContainerArrowLeft>
      <ContainerWeather>
        <ContentWeather>
          <ContentTitle>
            <TitleCity>
              {loading ? (
                <Skeleton
                  baseColor="#c3c3c3"
                  duration={1}
                  height={30}
                  width={200}
                />
              ) : (
                dataWeather?.name ?? "N/A"
              )}
            </TitleCity>
            <TitleTypeWeather>
              {loading ? (
                <Skeleton
                  baseColor="#c3c3c3"
                  duration={1}
                  height={30}
                  width={150}
                />
              ) : (
                dataWeather?.weather?.[0]?.main ?? "N/A"
              )}
            </TitleTypeWeather>
          </ContentTitle>
          <DegressValue
            isLoading={loading}
            value={Math.round(Number(data?.main?.temp)) ?? 0}
            weatherUp={Math.round(Number(data?.main?.temp_max)) ?? 0}
            weatherDown={Math.round(Number(data?.main?.temp_min)) ?? 0}
          />
          {loading ? (
            <Skeleton
              baseColor="#c3c3c3"
              duration={1}
              height={80}
              width={120}
              style={{ marginRight: "25px", borderRadius: "25%" }}
            />
          ) : (
            <IconCloud
              width={150}
              height={150}
              types={dataWeather?.weather?.[0]?.icon ?? "01d"}
            />
          )}
        </ContentWeather>
        <WeatherTimeline
          isLoading={loading}
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
