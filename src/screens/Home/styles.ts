import styled from "styled-components";

export const WrapperHome = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #0f0f0f;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media.max.tabletL`
  ${({ theme }) => theme.media.orientation.landscape`
   padding: 20px;
  `}
  `};
`;
export const ContentHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;

  ${({ theme }) => theme.media.max.tabletL`
  ${({ theme }) => theme.media.orientation.landscape`
   svg {
    width: 70px;
    height: 70px;
       }
  `}
  `};
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleWeather = styled.h2`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.ml};
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: #fff;
  text-transform: uppercase;
`;
export const TitleSelect = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[100]};
  color: #e4e4e4;
`;

export const ContentTitleCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 102px;
  cursor: pointer;
`;

export const TitleCity = styled.h2`
  font-size: 22px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #9d9d9d;
  }
`;
