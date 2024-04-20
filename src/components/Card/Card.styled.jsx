import styled from '@emotion/styled';

export const CardItem = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  margin: 0;
  box-sizing: border-box;
  max-width: 888px;
`;
export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;
export const CardPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
`;
export const CardRating = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  /* border-bottom: 2px solid #333; */
`;
export const Rating = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;
  border-bottom: 1px solid ${({ theme }) => theme.color.mainColor};

  /* text-decoration: underline; */
`;
export const CardLocation = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`;
export const CardText = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ListDetails = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const DetailItem = styled.li`
  background-color: #f2f4f7;
  border-radius: 100px;
  padding: 12px 18px;
  display: flex;

  text-align: center;
`;
export const CardImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 290px;
`;
export const LocationWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
`;
export const CardContainer = styled.div`
  width: 526px;
  height: 310px;
  display: flex;
  flex-direction: column;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;
export const TextDetailItem = styled.p`
  margin-left: 8px;
`;
export const ButtonFavorite = styled.button`
  background-color: transparent;
  border: none;
`;
export const ShowButton = styled.button`
  border-radius: 200px;
  font-size: 16px;
  width: 166px;
  height: 56px;
  border: none;
  line-height: 24px;
  font-weight: 500;

  color: ${({ theme }) => theme.color.whiteColor};
  background-color: ${({ theme }) => theme.color.mainButton};
  transition: background-color ${({ theme }) => theme.transition.main};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.hoverButton};
  }
`;
export const PriceWrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const LocationIcon = styled.svg`
  margin-left: 4px;
`;
