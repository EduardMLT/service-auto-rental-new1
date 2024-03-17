import React, { useEffect } from 'react';

import {
  ModalOverlay,
  ModalContent,
  ModalWindow,
  ModalClose,
  StyledImage,
  ModalTtd,
  ModalTtdDiv1,
  ModalTtdDiv2,
  ModalAccess,
  ModalRental,
  ModalRentalSpan,
  ModalRentalSpan1,
  ModalRentalDiv1,
  ModalRentalDiv2,
  ModalSpanTtd,
  ModalH3,
  ModalH3acc,
  ModalButton,
  ModalH2,
  ModalH2color,
  StyledSVGImage,
} from './Modal.styled';

import VerticalTrait from '../img/verticalTrait.svg';

const Modal = ({ item, closeModal }) => { 
  
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 

    return () => {
      document.body.style.overflow = ''; 
    };
  }, []); 

  const getImageSize = url => {
    const img = new Image();
    img.src = url;
  };

  useEffect(() => {
    getImageSize(item.img);
  }, [item.img]);

  const parseRentalConditions = rentalConditions => {
    const conditionsArray = rentalConditions.split('\n');
    const minimumAge = conditionsArray[0].split(':')[0];
    const ageValue = conditionsArray[0].split(':')[1];    
    return { minimumAge, ageValue, conditionsArray };
  };

  const { minimumAge, ageValue, conditionsArray } = parseRentalConditions(
    item.rentalConditions
  );

  const parseAddress = address => {
    const addressArray = address.split(',');
    const street = addressArray[0];
    const city = addressArray[1];
    const state = addressArray[2];
    return { street, city, state };
  };

  const { city, state } = parseAddress(item.address);

  const mileageNumber = parseInt(item.mileage, 10);
  const formattedMileage = new Intl.NumberFormat('en-US').format(mileageNumber);

  const formattedPrice = item.rentalPrice.replace('$', '') + '$';

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalWindow>
          <ModalClose onClick={closeModal}>&times;</ModalClose>

          <StyledImage src={item.img} alt="car" />
          <ModalTtd>
            <ModalH2>
              {item.make} <ModalH2color>{item.model}</ModalH2color> ,{' '}
              {item.year}
            </ModalH2>
            <ModalTtdDiv1>
              <ModalSpanTtd>{city}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>{state}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>ID: {item.id}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>Year: {item.year}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>Type: {item.type}</ModalSpanTtd>
            </ModalTtdDiv1>
            <ModalTtdDiv2>
              <ModalSpanTtd>
                Fuel Consumption: {item.fuelConsumption}
              </ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>Engine Size: {item.engineSize}</ModalSpanTtd>
            </ModalTtdDiv2>
            <ModalH3>{item.description}</ModalH3>
          </ModalTtd>
          <ModalAccess>
            <ModalH3acc>Accessories and functionalities:</ModalH3acc>
            <ModalTtdDiv1>
              <ModalSpanTtd>{item.accessories[0]}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>{item.accessories[1]}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>{item.accessories[2]}</ModalSpanTtd>
            </ModalTtdDiv1>
            <ModalTtdDiv1>
              <ModalSpanTtd>{item.functionalities[0]}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>{item.functionalities[1]}</ModalSpanTtd>
              <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
              <ModalSpanTtd>{item.functionalities[2]}</ModalSpanTtd>
            </ModalTtdDiv1>
          </ModalAccess>
          <ModalRental>
            <ModalH3acc>Rental Conditions:</ModalH3acc>
            <ModalRentalDiv1>
              <ModalRentalSpan>{minimumAge}:</ModalRentalSpan>
              <ModalRentalSpan1>{ageValue}</ModalRentalSpan1>
              <ModalRentalSpan>{conditionsArray[1]}</ModalRentalSpan>
            </ModalRentalDiv1>
            <ModalRentalDiv2>
              <ModalRentalSpan>{conditionsArray[2]}</ModalRentalSpan>
              <ModalRentalSpan>
                Mileage: <ModalRentalSpan1>{formattedMileage}</ModalRentalSpan1>
              </ModalRentalSpan>
              <ModalRentalSpan>
                Price: <ModalRentalSpan1>{formattedPrice}</ModalRentalSpan1>
              </ModalRentalSpan>
            </ModalRentalDiv2>
          </ModalRental>
          <ModalButton href="tel:+380730000000">Rental car</ModalButton>
        </ModalWindow>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
