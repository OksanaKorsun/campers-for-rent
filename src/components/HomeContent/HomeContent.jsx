import { Title, Wrapper, List, Item, Button} from './HomeContent.styled';
import { useNavigate } from 'react-router-dom';
export const HomeContent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };
  const features = [
    'Wide Selection of Campers',
    'Flexible Pricing Plans',
    'Full Service Maintenance',
    'Additional Equipment ',
    'Custom Tourist Packages',
    'Loyalty Program',
  ];
  return (
    <Wrapper>
      <Title>
        Experience the Freedom of the Open Road with Our Camper Rentals
      </Title>
      <List>
          {features.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </List>
      <Button type='button' onClick={handleClick}>Show more</Button>
    </Wrapper>
  );
};


