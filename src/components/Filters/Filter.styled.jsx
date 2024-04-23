import styled from '@emotion/styled';
import { Field } from 'formik';
export const SideBar = styled.aside`
  margin-top: 64px;
`;

export const Label = styled.label`
display: flex;
  align-items: center;
  margin-bottom: 16px;`;
export const FilterInput = styled(Field)`
  /* border-radius: 10px;
  padding: 17px 40px;
  width: 112px;
  height: 95px;
  background-color: transparent;
  position: relative; */
`;

export const LabelCheck = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 40px;
`;
export const InputWrapper = styled.div`
  position: relative;
  padding: 0;
`;
export const InputCheck = styled(Field)`
  border-radius: 10px;
  padding: 17px 40px;
  width: 112px;
  height: 95px;
  background-color: transparent;
`;
export const IconCheck = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const TextCheck = styled.span`
  font-size: 16px;
`;
export const CheckContainer = styled.div`
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
`;

export const InputRadio = styled(Field)`
  height: 128px;
  width: 128px;
  display: none;
`;
export const IconRadio = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const RadioWrapper = styled.label`
  padding: 0;
  position: relative;
  display: inline-block;
  width: 128px;
  height: 95px;
  border: 1px solid #000;
  border-radius: 10px;
  cursor: pointer;
  
 
  input[type='radio']:checked + .icon {
    color: ${({ theme }) => theme.color.hoverButton};
    stroke: ${({ theme }) => theme.color.hoverButton};
  }
`;
export const RadioContainer = styled.div`
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
  
`;
