import { EarthIcon } from "@/icons";
import {
  ContentTitle,
  ContainerHome,
  ContentHome,
  TitleSelect,
  TitleWeather,
  WrapperHome,
  TitleCity,
  ContentTitleCity,
} from "./styles";
import GridResponsive from "@/components/GridResponsive";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";
import router from "next/router";

const Home: React.FC = ({}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 1080);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    setIsMobile(sizeScreen.width < 1080);
    setIsLandscape(sizeScreen.width > sizeScreen.height);
  }, [sizeScreen]);

  const [coordinates, setCoordinates] = useState<Coordinates[]>([
    {
      country: "Nigeria",
      locality: "Dallol",
      coord: { lat: 10.244667, lon: 11.7871911 },
    },
    {
      country: "USA",
      locality: "Fairbanks",
      coord: { lat: 64.837845, lon: -147.716675 },
    },
    {
      country: "United_Kingdom",
      locality: "Londres",
      coord: { lat: 51.5073219, lon: -0.1276474 },
    },
    {
      country: "Brasil",
      locality: "Recife",
      coord: { lat: -8.0584933, lon: -34.8848193 },
    },
    {
      country: "Canada",
      locality: "Vancouver",
      coord: { lat: 49.2608724, lon: -123.113952 },
    },
    {
      country: "Russia",
      locality: "Yakutsk",
      coord: { lat: 62.0274078, lon: 129.7319787 },
    },
  ]);
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
            spaceColumns={isMobile ? 22 : 36}
            spaceRows={isLandscape && isMobile ? 15 : 48}
          >
            {coordinates.map((coord, index) => (
              <ContentTitleCity
                onClick={() =>
                  router.push(
                    `/weather?lat=${coord.coord.lat}&lon=${coord.coord.lon}&locality=${coord.locality}&country=${coord.country}`
                  )
                }
                key={index}
              >
                <TitleCity>{coord.locality}</TitleCity>
              </ContentTitleCity>
            ))}
          </GridResponsive>
        </ContentHome>
      </ContainerHome>
    </WrapperHome>
  );
};

export default Home;
