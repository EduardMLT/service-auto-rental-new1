import styled from 'styled-components';



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc((100% - 541px) / 2);
  width: 541px;
  height: 752px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: var(--font-family);
  border-radius: 24px;
`;

export const ModalContent = styled.div`
  background: #fff;
  /* padding: 20px; */
  border-radius: 8px;
  position: relative;
  z-index: 1001;
  max-width: 900px;
  width: 100%;
  /* text-align: center; */

  /* img {
    width: 461px;
    height: 248px;
    object-fit: contain;
  } */
`;

export const ModalClose = styled.span`
  position: absolute;
  top: 45px;
  right: 22px;
  cursor: pointer;
  font-size: 22px;
  color: #333;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  /* object-fit: contain; */
  width: 461px;
  height: 248px;
  /* margin: auto; */
  margin-bottom: 14px;
  margin-top: 40px;
  display: block;
  margin-left:40px;
  border-radius: 14px;
`;

export const ModalH2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #121417;
  /* display: flex; */
  text-align: left;
  margin-bottom: 8px;
  /* margin-left: 40px; */
`;

export const ModalH2color = styled.span`
  color: #3470ff;
`;

export const StyledSVGImage = styled.img`
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  display: inline-block;
  margin-left: 6px;
  margin-right: 6px;
`;


export const ModalTtd = styled.div`
  width: 461px;
  min-height: 126px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const ModalTtdDiv1 = styled.div`
  /* display: flex; */
  text-align: left;
  margin-bottom: 4px;
  /* margin-left: 40px; */
`;

export const ModalTtdDiv2 = styled.div`
  text-align: left;
  margin-bottom: 8px;
  /* margin-left: 40px; */
`;

export const ModalH3 = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  display: flex;
  text-align: left;
  
  /* margin-left: 40px; */
`;

export const ModalH3acc = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  display: flex;
  margin-bottom: 8px;
  /* text-align: left;
  margin-left: 40px; */
`;

export const ModalAccess = styled.div`
  width: 461px;
  min-height: 68px;
  margin-bottom: 24px;
  text-align: left;
  margin-left: 40px;
`;

export const ModalRental = styled.div`
  width: 461px;
  height: 100px;
  margin-bottom: 24px;
  text-align: left;
  margin-left: 40px;
`;

export const ModalRentalSpan = styled.span`
  padding: 7px 14px 7px 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #363535;
  background: #f9f9f9;
  border-radius: 35px;
`;

export const ModalRentalDiv1 = styled.div`
  margin-bottom: 8px;
`;

export const ModalRentalDiv2 = styled.div`
  margin-bottom: 24px;
`;


export const ModalSpanTtd = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
  
  /* height: 18px; */
`;

export const ModalButton = styled.button`
  /* height: 44px;
  width: 168px; */
  margin-bottom: 40px;
  margin-left: 40px;
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  background: #3470ff;

  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;

  &:hover {
    background: #0b44cd;
  }
`;
