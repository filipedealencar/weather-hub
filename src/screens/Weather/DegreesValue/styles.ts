import styled from "styled-components";

export const ContentDegreesCelsius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;
export const DegreesCelsius = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 7.5rem;
  font-family: "Outfit", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: #1f1f1f;
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
  width: 30px;
  align-items: center;
  justify-content: space-between;
`;
export const ValuesArrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #1f1f1f;
  position: relative;
  &::before {
    content: "°";
    font-size: 1rem;
    position: absolute;
    top: -6px;
    left: 10px;
  }
`;
export const SymbolDegreesCelsius = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  font-size: 1.5rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #1f1f1f;
  &::before {
    content: "°";
    font-size: 1rem;
    position: absolute;
    top: -6px;
    right: 16px;
  }
`;
