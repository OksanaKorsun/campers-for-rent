import { Card } from '../Card/Card';
import { StyledList } from './CardList.styled';

export const CardList = ({ campers }) => {
  return (
    <StyledList>
      {campers.map((camper) => (
          <Card key={camper.id} camper={camper} />
      ))}
    </StyledList>
  );
};
