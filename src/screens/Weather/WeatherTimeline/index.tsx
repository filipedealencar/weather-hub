import GridResponsive from "@/components/GridResponsive";
import {
  ContainerWeatherTimeline,
  ContainerWeatherTimelineStatistic,
  ContentDegreesWeatherTimeline,
  DegreesWeatherTimeline,
  MainWeatherTimeline,
  TitleDegreeWeatherTimeline,
  TitleWeatherTimeline,
  TitleWeatherTimelineStatistic,
  ValueWeatherTimelineStatistic,
} from "./styles";
import { IconCloud } from "@/icons";
import { IWeatherTimeline } from "./types";
import React, { useContext, useEffect, useState } from "react";
import { formatTimestamp } from "@/helpers/util";
import { WeatherDataDto } from "@/dto/Weather";
import { GlobalContext } from "@/contexts/GlobalContext";
import Skeleton from "react-loading-skeleton";

export const WeatherTimeline: React.FC<IWeatherTimeline> = ({
  options,
  isLoading,
}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 1080);

  useEffect(() => {
    setIsMobile(sizeScreen.width < 1080);
  }, [sizeScreen]);

  const getPeriodOfDay = (hour: number) => {
    if (hour >= 3 && hour < 9) {
      return "dawn";
    } else if (hour >= 9 && hour < 15) {
      return "morning";
    } else if (hour >= 15 && hour < 21) {
      return "afternoon";
    } else if (hour >= 21) {
      return "night";
    }
  };

  function selectObjectsByTimePeriod(data: WeatherDataDto) {
    const morningObj = data?.list?.find(
      (item) => getPeriodOfDay(new Date(item?.dt_txt).getHours()) === "morning"
    );
    const afternoonObj = data?.list?.find(
      (item) =>
        getPeriodOfDay(new Date(item?.dt_txt).getHours()) === "afternoon"
    );
    const nightObj = data?.list?.find(
      (item) => getPeriodOfDay(new Date(item?.dt_txt).getHours()) === "night"
    );
    const dawnObj = data?.list?.find(
      (item) => getPeriodOfDay(new Date(item?.dt_txt).getHours()) === "dawn"
    );

    return [dawnObj!, morningObj!, afternoonObj!, nightObj!];
  }

  useEffect(() => {
    console.log(selectObjectsByTimePeriod(options.forecast));
  }, [options.forecast]);

  return (
    <MainWeatherTimeline>
      <GridResponsive
        columns={{
          count: 6,
          height: [1, 1, 1, 1],
        }}
        rows={{
          count: 1,
        }}
        spaceColumns={isMobile ? 18 : 36}
        spaceRows={36}
      >
        {selectObjectsByTimePeriod(options.forecast)?.map((item, index) => (
          <ContainerWeatherTimeline key={index}>
            <TitleWeatherTimeline>
              {isLoading ? (
                <Skeleton
                  baseColor="#c3c3c3"
                  style={{ top: "25px" }}
                  duration={1}
                  height={10}
                  width={60}
                />
              ) : (
                getPeriodOfDay(new Date(item?.dt_txt).getHours())
              )}
            </TitleWeatherTimeline>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                duration={1}
                height={30}
                width={60}
                style={{ borderRadius: "25%", top: "25px" }}
              />
            ) : (
              <IconCloud
                types={item?.weather[0]?.icon}
                width={50}
                height={50}
              />
            )}
            <ContentDegreesWeatherTimeline>
              {isLoading ? (
                <Skeleton
                  baseColor="#c3c3c3"
                  style={{ top: "25px" }}
                  duration={1}
                  height={10}
                  width={60}
                />
              ) : (
                <>
                  <DegreesWeatherTimeline
                    $isUnavailable={isNaN(item?.main.temp)}
                  >
                    {isNaN(item?.main.temp)
                      ? "N/A"
                      : Math.round(item?.main.temp)}
                  </DegreesWeatherTimeline>
                  {!isNaN(item?.main.temp) && (
                    <TitleDegreeWeatherTimeline>C</TitleDegreeWeatherTimeline>
                  )}
                </>
              )}
            </ContentDegreesWeatherTimeline>
          </ContainerWeatherTimeline>
        ))}
      </GridResponsive>
      <GridResponsive
        columns={{
          count: 6,
          height: [1, 1, 1, 1],
        }}
        rows={{
          count: 1,
        }}
        spaceColumns={isMobile ? 9 : 18}
        spaceRows={36}
      >
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              "wind speed"
            )}
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              `${
                options.data?.wind?.speed
                  ? `${options.data?.wind?.speed} m/s`
                  : "N/A"
              } `
            )}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              "sunrise"
            )}
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              `${
                options.data?.sys?.sunrise
                  ? formatTimestamp(String(options.data?.sys?.sunrise))
                  : "N/A"
              }`
            )}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              "sunset"
            )}
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              `${
                options.data?.sys?.sunrise
                  ? formatTimestamp(String(options.data?.sys?.sunset))
                  : "N/A"
              }`
            )}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              "humidity"
            )}
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ top: "25px" }}
                duration={1}
                height={10}
                width={70}
              />
            ) : (
              `${
                options.data?.main?.humidity
                  ? `${options.data?.main?.humidity} %`
                  : "N/A"
              } `
            )}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
      </GridResponsive>
    </MainWeatherTimeline>
  );
};
