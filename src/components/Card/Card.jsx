import sprite from '../../assets/sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCampers } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/slice';
import {
  CardItem,
  DetailItem,
  TextDetailItem,
  ItemWrapper,
  CardImg,
  CardContainer,
  TitleBox,
  CardText,
  CardTitle,
  CardPrice,
  ButtonFavorite,
  LocationWrap,
  CardRating,
  CardLocation,
  ListWrap,
  ShowButton,
  ListDetails,
  PriceWrap,
  Rating,
 
} from './Card.styled';

export const Card = ({ camper }) => {
  const data = [
    { icon: 'icon-users', text: `${camper.adults} adults` },
    { icon: 'icon-automatic', text: 'Automatic' },
    { icon: 'icon-petrol', text: 'Petrol' },
    { icon: 'icon-kitchen', text: 'Kitchen' },
    { icon: 'icon-bed', text: `${camper.details.beds} beds` },
    { icon: 'icon-ac-2', text: 'AC' },
  ];
  const favorite = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();
  const isFavorite = favorite.find((item) => item.id === camper.id);
  const handleFavoriteToggle = () => {
    isFavorite
      ? dispatch(deleteFavorite(camper))
      : dispatch(addFavorite(camper));
  };
  return (
    <CardItem>
      <ItemWrapper>
        <CardImg src={camper.gallery[0]} alt={camper.name} />
        <CardContainer>
          <TitleBox>
            <CardTitle>{camper.name}</CardTitle>
            <PriceWrap>
              <CardPrice>&euro;{camper.price.toFixed(2)}</CardPrice>
              <ButtonFavorite type="button" onClick={handleFavoriteToggle}>
                {isFavorite ? (
                  <svg width="24px" height="24px">
                    <use href={`${sprite}#icon-heart-favorite`}></use>
                  </svg>
                ) : (
                  <svg width="24px" height="24px">
                    <use href={`${sprite}#icon-heart-default`}></use>
                  </svg>
                )}
              </ButtonFavorite>
            </PriceWrap>
          </TitleBox>
          <LocationWrap>
            <CardRating>
              <svg width="16px" height="16px">
                <use href={`${sprite}#icon-star`} />
              </svg>
              <Rating>{camper.rating}({camper.reviews.length} Reviews)</Rating>
            </CardRating>
            <CardLocation>
              <svg width="16px" height="16px">
                <use href={`${sprite}#icon-location`} />
              </svg>
              <p>{camper.location}</p>
            </CardLocation>
          </LocationWrap>
          <CardText>{camper.description} ...</CardText>
          <ListWrap>
            <ListDetails>
              {data.map((item, index) => (
                <DetailItem key={index}>
                  <svg width="20px" height="20px">
                    <use href={`${sprite}#${item.icon}`} />
                  </svg>
                  <TextDetailItem>{item.text}</TextDetailItem>
                </DetailItem>
              ))}
            </ListDetails>
          </ListWrap>
          <ShowButton type="button">Show More</ShowButton>
        </CardContainer>
      </ItemWrapper>
    </CardItem>
  );
};
