import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`

  background-color: transparent;
  color: ${({ theme }) => theme.color.mainColor};
  font-size: 16px;
  line-height: 24px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  width: 145px;
  height: 56px;
  transition: border-color ${({ theme }) => theme.transition.main};
  align-self: center;
  margin-left: 150px;
  margin-top: 50px;

  &:hover {
    border-color: ${({ theme }) => theme.color.mainButton};
  }
`;
