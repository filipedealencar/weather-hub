import { IconCloud } from "@/icons";
import {
  ContainerWeather,
  ContentTitle,
  ContentWeather,
  TitleCity,
  TitleTypeWeather,
  WrapperWeather,
} from "./styles";
import { DegressValue } from "./DegreesValue";
import { WeatherTimeline } from "./WeatherTimeline";

const Weather: React.FC = ({}) => {
  return (
    <WrapperWeather>
      <ContainerWeather>
        <ContentWeather>
          <ContentTitle>
            <TitleCity>London</TitleCity>
            <TitleTypeWeather>snowy</TitleTypeWeather>
          </ContentTitle>
          <DegressValue />
          <IconCloud width={200} height={200} types="02d" />
        </ContentWeather>
        <WeatherTimeline />
      </ContainerWeather>
    </WrapperWeather>
  );
};

export default Weather;
