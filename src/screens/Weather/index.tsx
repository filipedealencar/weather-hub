import { ArrowIcon } from "@/icons";
import {
  ContainerInfoDegreesCelsius,
  ContainerWeather,
  ContainertArrow,
  ContentArrow,
  ContentDegreesCelsius,
  ContentTitle,
  ContentWeather,
  DegreesCelsius,
  IconDegrees,
  SymbolDegreesCelsius,
  TitleCity,
  TitleTypeWeather,
  ValuesArrow,
  WrapperWeather,
} from "./styles";

const Weather: React.FC = ({}) => {
  return (
    <WrapperWeather>
      <ContainerWeather>
        <ContentWeather>
          <ContentTitle>
            <TitleCity>London</TitleCity>
            <TitleTypeWeather>snowy</TitleTypeWeather>
          </ContentTitle>
          <ContentDegreesCelsius>
            <DegreesCelsius>-2</DegreesCelsius>
            <ContainerInfoDegreesCelsius>
              <SymbolDegreesCelsius>
                <IconDegrees>°</IconDegrees>C
              </SymbolDegreesCelsius>
              <ContainertArrow>
                <ContentArrow>
                  <ArrowIcon />
                  <ValuesArrow>0</ValuesArrow>
                </ContentArrow>
                <ContentArrow>
                  <ArrowIcon arrowDown />
                  <ValuesArrow>8</ValuesArrow>
                </ContentArrow>
              </ContainertArrow>
            </ContainerInfoDegreesCelsius>
          </ContentDegreesCelsius>
        </ContentWeather>
      </ContainerWeather>
    </WrapperWeather>
  );
};

export default Weather;
