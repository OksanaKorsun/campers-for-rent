import styled from '@emotion/styled';
export const Wrapper = styled.div`
  display: inline-block;
  margin: 0;
`;
export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 30px;
`;
export const Item = styled.li`
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.mainColor};
    border-radius: 50%;
  }
`;
export const Button = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  border-radius: 200px;
  color: ${({ theme }) => theme.color.whiteColor};
  background-color: ${({ theme }) => theme.color.mainButton};
  transition: background-color ${({ theme }) => theme.transition.main};
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverButton};
  }
`;