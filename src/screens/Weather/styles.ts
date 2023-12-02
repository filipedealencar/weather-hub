import styled from "styled-components";

export const WrapperWeather = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary.snow};
`;

export const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ContentWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleCity = styled.h2`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.ml};
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #000;
  text-transform: uppercase;
`;
export const TitleTypeWeather = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[100]};
  color: #000;
`;

export const ContentDegreesCelsius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 18vh;
`;
export const IconDegrees = styled.span`
  display: flex;
  height: 30px;
  width: 10px;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #1f1f1f;
`;
export const DegreesCelsius = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: #1f1f1f;
`;

export const ContainerInfoDegreesCelsius = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export const ContainertArrow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ContentArrow = styled.div`
  display: flex;
`;
export const ValuesArrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #1f1f1f;
`;
export const SymbolDegreesCelsius = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 2rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #1f1f1f;
`;
