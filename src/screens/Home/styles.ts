import styled from "styled-components";

export const WrapperHome = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ContentHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
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
  font-family: Montserrat;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: #fff;
  text-transform: uppercase;
`;
export const TitleSelect = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-family: "Outfit", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight[100]};
  color: #e4e4e4;
`;

export const TitleCity = styled.h2`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: Montserrat;
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: #fff;
`;
