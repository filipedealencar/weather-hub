import { EarthIcon } from "@/icons";
import {
  ContentTitle,
  ContainerHome,
  ContentHome,
  TitleSelect,
  TitleWeather,
  WrapperHome,
  TitleCity,
} from "./styles";
import GridResponsive from "@/components/GridResponsive";

const Home: React.FC = ({}) => {
  return (
    <WrapperHome>
      <ContainerHome>
        <ContentHome>
          <ContentTitle>
            <TitleWeather>Weather</TitleWeather>
            <TitleSelect>select a city</TitleSelect>
          </ContentTitle>
          <EarthIcon />
          <GridResponsive
            columns={{
              count: 6,
              height: [1, 1, 1],
            }}
            rows={{
              count: 1,
            }}
            spaceColumns={18}
            spaceRows={18}
          >
            <TitleCity>Dallol</TitleCity>
            <TitleCity>Fairbanks</TitleCity>
            <TitleCity>Londres</TitleCity>
            <TitleCity>Recife</TitleCity>
            <TitleCity>Vancouver</TitleCity>
            <TitleCity>Yakutsk</TitleCity>
          </GridResponsive>
        </ContentHome>
      </ContainerHome>
    </WrapperHome>
  );
};

export default Home;
