import React, { useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
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
console.log({minimumAge}, {ageValue}, {conditionsArray});
    return { minimumAge, ageValue, conditionsArray };
  };

  const { minimumAge, ageValue, conditionsArray } = parseRentalConditions(
    item.rentalConditions
  );

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalClose onClick={closeModal}>&times;</ModalClose>

        <StyledImage src={item.img} alt="car" />
        <ModalTtd>
          <ModalH2>
            {item.make} <ModalH2color>{item.model}</ModalH2color> , {item.year}
          </ModalH2>
          <ModalTtdDiv1>
            <ModalSpanTtd>Kiev</ModalSpanTtd>
            <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
            <ModalSpanTtd>Ukraine</ModalSpanTtd>
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
            <ModalRentalSpan>
              {minimumAge} : {ageValue}
            </ModalRentalSpan>
            <ModalRentalSpan>{conditionsArray[1]}</ModalRentalSpan>
          </ModalRentalDiv1>
          <ModalRentalDiv2>
            <ModalRentalSpan>{conditionsArray[2]}</ModalRentalSpan>
            <ModalRentalSpan>
              Mileage: <ModalRentalSpan1>{item.mileage}</ModalRentalSpan1>
            </ModalRentalSpan>
            <ModalRentalSpan>
              Price: <ModalRentalSpan1>{item.rentalPrice}</ModalRentalSpan1>
            </ModalRentalSpan>
          </ModalRentalDiv2>
        </ModalRental>
        <ModalButton onClick={() => {}}>Rental car</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
