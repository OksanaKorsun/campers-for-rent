import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const LogoIcon = styled.svg`
  width: 50px;
  height: 36px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.mainCollor};
  transition: color ${({ theme }) => theme.transition.main};
  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.color.mainButton};
  }

  &:is(:hover, :focus) svg {
    fill: ${({ theme }) => theme.color.mainButton};
  }
`;
export const Company = styled.p`
  font-size: 20px;
`