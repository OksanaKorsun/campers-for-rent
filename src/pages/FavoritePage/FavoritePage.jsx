import { CardList } from '../../components/CardList/CardList';
import { FavoriteSection } from './FavoritePage.styled';
import { selectFavoriteCampers } from '../../redux/selectors';
import { useSelector } from 'react-redux';
const FavoritePage = () => {
  const favoriteCampers = useSelector(selectFavoriteCampers);

  return (
    <FavoriteSection>
      {favoriteCampers.length === 0 ? (
        <h2>
          You can add your favorite campers, if you click on the ❤️ in the
          catalog
        </h2>
      ) : (
        <CardList campers={favoriteCampers} />
      )}
    </FavoriteSection>
  );
};
export default FavoritePage;
