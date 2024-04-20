import { BgHome, HomeWraper } from './HomePage.styled';
import { HomeContent } from '../../components/HomeContent/HomeContent';

const HomePage = () => {
  return (
    <HomeWraper>
      <HomeContent/>
      <BgHome />
    </HomeWraper>
  );
};

export default HomePage;
