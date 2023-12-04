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

export const DegressValue: React.FC<IDegreesCelsius> = ({
  value,
  weatherUp,
  weatherDown,
}) => {
  return (
    <ContentDegreesCelsius>
      <DegreesCelsius>{value ?? 0}</DegreesCelsius>
      <ContainerInfoDegreesCelsius>
        <SymbolDegreesCelsius>C</SymbolDegreesCelsius>
        <ContainertArrow>
          <ContentArrow>
            <ArrowIcon />
            <ValuesArrow>{weatherUp ?? 0}</ValuesArrow>
          </ContentArrow>
          <ContentArrow>
            <ArrowIcon arrowDown />
            <ValuesArrow>{weatherDown ?? 0}</ValuesArrow>
          </ContentArrow>
        </ContainertArrow>
      </ContainerInfoDegreesCelsius>
    </ContentDegreesCelsius>
  );
};
