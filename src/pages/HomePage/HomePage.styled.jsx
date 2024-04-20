import styled from '@emotion/styled';
import backgroundImg from '../../assets/background/camper_378.png';

export const HomeWraper = styled.div`
display: flex;
gap: 35px;
align-items: center;
overflow: hidden;
padding: 0 64px;
`;
export const HomeContent = styled.p`
font-size: 30px;
font-weight: bold;
`
export const BgHome = styled.div`
width: 100%;
  min-height: 90vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;
