import { ArrowIcon } from "@/icons";
import {
  ContentDegreesCelsius,
  DegreesCelsius,
  ContainerInfoDegreesCelsius,
  SymbolDegreesCelsius,
  ContainertArrow,
  ContentArrow,
  ValuesArrow,
} from "./styles";
import Skeleton from "react-loading-skeleton";

export const DegressValue: React.FC<IDegreesCelsius> = ({
  value,
  weatherUp,
  weatherDown,
  isLoading,
}) => {
  return (
    <ContentDegreesCelsius>
      <DegreesCelsius>
        {isLoading ? (
          <Skeleton
            baseColor="#c3c3c3"
            style={{ borderRadius: "10%" }}
            duration={1}
            height={100}
            width={120}
          />
        ) : isNaN(value) ? (
          "N/A"
        ) : (
          value
        )}
      </DegreesCelsius>
      <ContainerInfoDegreesCelsius>
        <SymbolDegreesCelsius $isLoading={isLoading || isNaN(value)}>
          {isLoading ? (
            <Skeleton baseColor="#c3c3c3" duration={1} height={20} width={20} />
          ) : isNaN(value) ? (
            ""
          ) : (
            "C"
          )}
        </SymbolDegreesCelsius>
        <ContainertArrow>
          <ContentArrow>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ marginLeft: "14px" }}
                duration={1}
                height={20}
                width={20}
              />
            ) : (
              <>
                <ArrowIcon />
                <ValuesArrow $isUnavailable={isNaN(weatherUp)}>
                  {isNaN(weatherUp) ? "N/A" : weatherUp}
                </ValuesArrow>
              </>
            )}
          </ContentArrow>
          <ContentArrow>
            {isLoading ? (
              <Skeleton
                baseColor="#c3c3c3"
                style={{ marginLeft: "14px" }}
                duration={1}
                height={20}
                width={20}
              />
            ) : (
              <>
                <ArrowIcon arrowDown />
                <ValuesArrow $isUnavailable={isNaN(weatherUp)}>
                  {isNaN(weatherDown) ? "N/A" : weatherDown}
                </ValuesArrow>
              </>
            )}
          </ContentArrow>
        </ContainertArrow>
      </ContainerInfoDegreesCelsius>
    </ContentDegreesCelsius>
  );
};
