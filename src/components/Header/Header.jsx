import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
    </header>
  );
};
