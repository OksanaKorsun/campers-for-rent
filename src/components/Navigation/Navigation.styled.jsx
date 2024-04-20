import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  font-size: 20px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.mainColor};
  transition: color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.mainButton};
  }
`;
