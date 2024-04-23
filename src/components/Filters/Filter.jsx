import { useDispatch } from 'react-redux';
import {
  FilterInput,
  Label,
  //   SideBar,
  InputCheck,
  IconCheck,
  TextCheck,
  InputWrapper,
  InputRadio,
  IconRadio,
  RadioWrapper,
  CheckContainer,
  RadioContainer,
} from './Filter.styled';
import sprite from '../../assets/sprite/sprite.svg';
import { setLocation, setVehicle, setEquipment } from '../../redux/slice';
import //   selectEquipmentFilter,
//   selectFilteredLocation,
//   selectVehicleTypeFilter,
'../../redux/selectors';
import { Form, Formik } from 'formik';

export const Filter = ({ campers }) => {
  const dispatch = useDispatch();
  //   const locationFilter = useSelector(selectFilteredLocation);

  //   const equipmentFilter = useSelector(selectEquipmentFilter);
  //   const vehicleTypeFilter = useSelector(selectVehicleTypeFilter);

  //   const handleEquipmentFilter = filter => {
  //     const newFilter = [...equipmentFilter];
  //     const index = newFilter.indexOf(filter);
  //     if (index !== -1) {
  //       newFilter.splice(index, 1);
  //     } else {
  //       newFilter.push(filter);
  //     }
  //     dispatch(setEquipment(newFilter));
  //   };

  //   const handleVehicleTypeFilter = filter => {
  //     const newFilter = [...vehicleTypeFilter];
  //     const index = newFilter.indexOf(filter);
  //     if (index !== -1) {
  //       newFilter.splice(index, 1);
  //     } else {
  //       newFilter.push(filter);
  //     }
  //     dispatch(setVehicle(newFilter));
  //   };
  return (
    <div>
      <Formik
        initialValues={{
          location: '',
          ac: 0,
          transmition: 'automatic',
          kitchen: 0,
          tv: 0,
          shower: 0,
          vehicleType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          const { location, vehicleType, ...equipment } = values;
          dispatch(setLocation(location));
          dispatch(setVehicle(vehicleType));
          dispatch(setEquipment(equipment));
        }}
      >
        <Form>
          <Label>
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-location`} />
            </svg>
            Location
            <FilterInput
              as="select"
              id="location"
              name="location"
              //   multiple={true}
              //   value={locationFilter}
            >
              {campers.map((camper) => (
                <option key={camper.id}>{camper.location}</option>
              ))}
            </FilterInput>
          </Label>
          <h2>Equipment</h2>
          <CheckContainer>
            <InputWrapper>
              <InputCheck type="checkbox" value="ac" name="ac" />
              <IconCheck>
                <svg width="32px" height="32px">
                  <use href={`${sprite}#icon-ac-2`} />
                </svg>
                <TextCheck>AC</TextCheck>
              </IconCheck>
            </InputWrapper>
            <InputWrapper>
              <InputCheck
                type="checkbox"
                value="automatic"
                name="transmition"
              />
              <IconCheck>
                <svg width="32px" height="32px">
                  <use href={`${sprite}#icon-automatic`} />
                </svg>
                <TextCheck>Automatic</TextCheck>
              </IconCheck>
            </InputWrapper>
            <InputWrapper>
              <InputCheck type="checkbox" value="kitchen" name="kitchen" />
              <IconCheck>
                <svg width="32px" height="32px">
                  <use href={`${sprite}#icon-kitchen`} />
                </svg>
                <TextCheck>Kitchen</TextCheck>
              </IconCheck>
            </InputWrapper>
            <InputWrapper>
              <InputCheck type="checkbox" value="tv" name="tv" />
              <IconCheck>
                <svg width="32px" height="32px">
                  <use href={`${sprite}#icon-tv`} />
                </svg>
                <TextCheck>TV</TextCheck>
              </IconCheck>
            </InputWrapper>
            <InputWrapper>
              <InputCheck type="checkbox" value="shower" name="shower" />
              <IconCheck>
                <svg width="32px" height="32px">
                  <use href={`${sprite}#icon-shower`} />
                </svg>
                <TextCheck>Shower/WC</TextCheck>
              </IconCheck>
            </InputWrapper>
          </CheckContainer>

          <h2>Vehicle Type</h2>
          <RadioContainer>
            <RadioWrapper>
              <InputRadio
                type="radio"
                id="van"
                name="vehicleType"
                value="fullyIntegrated"
              />
              <IconRadio className="icon">
                <svg width="40px" height="28px">
                  <use href={`${sprite}#icon-camper3`} />
                </svg>
                <span>Van</span>
              </IconRadio>
            </RadioWrapper>

            <RadioWrapper>
              <InputRadio type="radio" name="vehicleType" value="camperVan" />
              <IconRadio className="icon">
                <svg width="40px" height="28px">
                  <use href={`${sprite}#icon-camper2`} />
                </svg>
                <span>Fully Integrated</span>
              </IconRadio>
            </RadioWrapper>

            <RadioWrapper>
              <InputRadio type="radio" name="vehicleType" value="alcov" />
              <IconRadio className="icon">
                <svg width="40px" height="28px">
                  <use href={`${sprite}#icon-camper`} />
                </svg>
                <span>Alcov</span>
              </IconRadio>
            </RadioWrapper>
          </RadioContainer>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
