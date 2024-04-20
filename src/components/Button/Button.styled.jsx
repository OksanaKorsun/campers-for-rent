import styled from '@emotion/styled';
export const StyledButton = styled.button`
    width: 166px;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.whiteColor};
    background-color: ${({ theme }) => theme.color.mainButton};
    transition: background-color ${({ theme }) => theme.transition.main};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.hoverButton};
  }
`