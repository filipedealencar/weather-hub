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

export const WeatherTimeline: React.FC<IWeatherTimeline> = ({ options }) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 1080);

  useEffect(() => {
    setIsMobile(sizeScreen.width < 1080);
  }, [sizeScreen]);

  const getPeriodOfDay = (hour: number) => {
    if (hour >= 0 && hour < 6) {
      return "dawn";
    } else if (hour >= 6 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 18) {
      return "afternoon";
    } else {
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
              {getPeriodOfDay(new Date(item?.dt_txt).getHours())}
            </TitleWeatherTimeline>
            <IconCloud types={item?.weather[0]?.icon} width={50} height={50} />
            <ContentDegreesWeatherTimeline>
              <DegreesWeatherTimeline>
                {Math.round(item?.main.temp)}
              </DegreesWeatherTimeline>
              <TitleDegreeWeatherTimeline>C</TitleDegreeWeatherTimeline>
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
            wind speed
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {`${
              options.data?.wind?.speed
                ? `${options.data?.wind?.speed} m/s`
                : "unavailable"
            } `}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>sunrise</TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {`${
              options.data?.sys?.sunrise
                ? formatTimestamp(String(options.data?.sys?.sunrise))
                : "unavailable"
            }`}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>sunset</TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {`${
              options.data?.sys?.sunrise
                ? formatTimestamp(String(options.data?.sys?.sunset))
                : "unavailable"
            }`}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>
            humidity
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>
            {`${
              options.data?.main?.humidity
                ? `${options.data?.main?.humidity} %`
                : "unavailable"
            } `}
          </ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
      </GridResponsive>
    </MainWeatherTimeline>
  );
};
