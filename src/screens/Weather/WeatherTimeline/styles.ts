import styled from "styled-components";

export const MainWeatherTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: space-between;
  align-items: center;
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
  color: #1f1f1f;
`;

export const ContainerWeatherTimelineStatistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const TitleWeatherTimelineStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[200]};
  color: #1f1f1f;
`;
export const ValueWeatherTimelineStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
  color: #1f1f1f;
`;
