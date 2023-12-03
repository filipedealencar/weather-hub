import styled from "styled-components";

export const WrapperWeather = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const ContentWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
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
