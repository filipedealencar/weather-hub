import styled from "styled-components";

export const ContentDegreesCelsius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;

  ${({ theme }) => theme.media.max.tabletL`
  ${({ theme }) => theme.media.orientation.landscape`
  height: 65px;
  `}
  `}
`;
export const DegreesCelsius = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 7.5rem;
  font-family: "Outfit", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: ${({ theme }) => theme.colors.main.color};

  ${({ theme }) => theme.media.max.tabletL`
  ${({ theme }) => theme.media.orientation.landscape`
  font-size: 5.5rem;
  `}
  `}
`;

export const ContainerInfoDegreesCelsius = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const ContainertArrow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ContentArrow = styled.div`
  display: flex;
  gap: 4px;

  align-items: center;
  justify-content: space-between;
`;
export const ValuesArrow = styled.span<{ $isUnavailable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: ${({ theme }) => theme.colors.main.color};
  position: relative;
  &::before {
    content: "°";
    font-size: 1rem;
    position: absolute;
    top: -6px;
    left: 100%;
    display: ${({ $isUnavailable }) => $isUnavailable && "none"};
  }
`;
export const SymbolDegreesCelsius = styled.span<{ $isLoading: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  font-size: 1.5rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: ${({ theme }) => theme.colors.main.color};
  &::before {
    content: "°";
    font-size: 1rem;
    position: absolute;
    top: -6px;
    margin-right: 20px;
    display: ${({ $isLoading }) => $isLoading && "none"};
  }
`;
