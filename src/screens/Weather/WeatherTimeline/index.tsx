import GridResponsive from "@/components/GridResponsive";
import {
  ContainerWeatherTimeline,
  ContainerWeatherTimelineStatistic,
  MainWeatherTimeline,
  TitleWeatherTimeline,
  TitleWeatherTimelineStatistic,
  ValueWeatherTimelineStatistic,
} from "./styles";
import { IconCloud } from "@/icons";
import { useContext } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

export const WeatherTimeline: React.FC = ({}) => {
  const { sizeScreen } = useContext(GlobalContext);

  const timeLine = [
    { main: "Rain", description: "moderate rain", icon: "10d" },
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03n",
    },
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02n",
    },
  ];

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
        spaceColumns={0}
        spaceRows={36}
      >
        {timeLine.map((item, index) => (
          <ContainerWeatherTimeline key={index}>
            <TitleWeatherTimeline>dawn</TitleWeatherTimeline>
            <IconCloud types={item.icon} width={50} height={50} />
            <TitleWeatherTimeline>-8</TitleWeatherTimeline>
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
        spaceColumns={8}
        spaceRows={36}
      >
        <ContainerWeatherTimelineStatistic>
          <TitleWeatherTimelineStatistic>
            wind speed
          </TitleWeatherTimelineStatistic>
          <ValueWeatherTimelineStatistic>5.1 m/s</ValueWeatherTimelineStatistic>
        </ContainerWeatherTimelineStatistic>
      </GridResponsive>
    </MainWeatherTimeline>
  );
};
