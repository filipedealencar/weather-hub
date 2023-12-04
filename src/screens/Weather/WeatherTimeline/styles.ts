import styled from "styled-components";

export const MainWeatherTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.media.max.tabletL`
  ${({ theme }) => theme.media.orientation.landscape`
  justify-content: center;
  `}
  `}
`;
export const ContainerWeatherTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWeatherTimeline = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const ContentDegreesWeatherTimeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TitleDegreeWeatherTimeline = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const DegreesWeatherTimeline = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: ${({ theme }) => theme.colors.mainColor};
  position: relative;

  &::before {
    content: "°";
    font-size: 0.9rem;
    position: absolute;
    top: -15%;
    right: -60%;
  }
`;

export const ContainerWeatherTimelineStatistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    border-left: 1px solid #9b9b9b;
    right: -10px;
    height: 70%;
  }
  &:last-child:after {
    display: none;
  }
`;
export const TitleWeatherTimelineStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[200]};
  color: ${({ theme }) => theme.colors.mainColor};
`;
export const ValueWeatherTimelineStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ccc;
  margin: 0 10px;
`;
