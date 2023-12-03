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

export const DegressValue: React.FC = ({}) => {
  return (
    <ContentDegreesCelsius>
      <DegreesCelsius>-2</DegreesCelsius>
      <ContainerInfoDegreesCelsius>
        <SymbolDegreesCelsius>C</SymbolDegreesCelsius>
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
  );
};
