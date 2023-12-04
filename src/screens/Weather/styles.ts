import styled from "styled-components";

export const WrapperWeather = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.max.tabletL`
  
  ${({ theme }) => theme.media.orientation.landscape`
  flex-direction: row;
  gap: 38px;
  `}
  
  
  `}
`;
export const ContentWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  ${({ theme }) => theme.media.max.tabletL`
  ${({ theme }) => theme.media.orientation.landscape`
   margin-top: 30px;
  `}
  `};
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
  color: ${({ theme }) => theme.colors.main.color};
  text-transform: uppercase;

  ${({ theme }) => theme.media.max.tabletL`
  
  ${({ theme }) => theme.media.orientation.landscape`
  font-size: 28px
  `}
  `}
`;
export const TitleTypeWeather = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[100]};
  color: ${({ theme }) => theme.colors.main.color};

  ${({ theme }) => theme.media.max.tabletL`
  
  ${({ theme }) => theme.media.orientation.landscape`
  font-size: 24px
  `}
  `}
`;

export const ContainerArrowLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;
  cursor: pointer;

  &:hover {
    svg > path {
      fill: #9d9d9d;
    }
  }

  svg {
    width: 30px;
    height: 25px;
  }
`;
