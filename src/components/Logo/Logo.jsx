import sprite from '../../assets/sprite/sprite.svg';
import { LogoIcon, LogoWrapper, StyledLink, Company } from './Logo.styled';
export const Logo = () => {
  return (
    <div>
      <StyledLink to="/">
        <LogoWrapper>
          <LogoIcon>
            <use href={`${sprite}#icon-camper`}></use>
          </LogoIcon>
          <Company>CarpetUA</Company>
        </LogoWrapper>
      </StyledLink>
    </div>
  );
};
