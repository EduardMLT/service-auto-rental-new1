import styled from 'styled-components';
import Select from 'react-select';

export const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LabelBrandDiv = styled.div`
  width: 224px;
  height: 74px;
  border-radius: 14px;
`;

export const LabelBrand = styled.label`
  display: block;
  height: 74px;
  position: relative;
`;

export const FilterText = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;

export const CustomSelect = styled(Select)`
  .filter__placeholder {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #121417;
  }

  .filter__control {
    height: 48px;
    width: 224px;
    border-radius: 14px;
    background: #f7f7fb;
    border: none;
    cursor: pointer;
    outline: none;
    border: none;

    &:hover,
    &:focus {
      border: 1px solid #b3b3b3;
    }
  }

  .filter__value-container {
    height: 38px;
    font-size: 22px;
  }

  .filter__input {
    font-size: 12px;
  }
`;

export const PriceDiv = styled.div`
  margin-right: 18px;
  margin-left: 18px;
  position: relative;
`;

export const LabelPrice = styled.label`
  display: block;
  height: 74px;
  position: relative;
  
`;

export const FilterTextIn = styled.span`
  position: absolute;
  top: 57%;
  
  transform: translateY(-50%);
  left: 18px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;
`;

export const DollarSign = styled.span`
  position: absolute;
  top: 57%;
  transform: translateY(-50%);
  /* left: 35%; */
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;
  /* left: ${props => props.left}%; */
  left: ${props => (props.left !== null ? props.left + '%' : '10%')};
`;

export const InputPrice = styled.input`
  display: block;
  width: 125px;
  height: 48px;
  border-radius: 14px;
  background: #f7f7fb;
  cursor: pointer;
  border: none;
  outline: none;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  padding-left: 40px;  

  &:hover {
    border: 1px solid #b3b3b3;
  }
`;

export const LabelMinMileage = styled.label`
  display: block;
  height: 74px;
  position: relative;
`;

export const InputMinMileage = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border-radius: 14px 0 0 14px;
  background: #f7f7fb;
  cursor: pointer;
  border: none;
  outline: none;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  padding-left: 70px;

  &:hover {
    border: 1px solid #b3b3b3;
  }
`;

export const LabelMaxMileage = styled.label`
  display: block;
  height: 74px;
  position: relative;
`;

export const InputMaxMileage = styled.input`
  
  display: block;
  width: 160px;
  height: 48px;
  border-radius: 0 14px 14px 0;
  margin-top: 18px;
  background: #f7f7fb;
  cursor: pointer;
  border: none;
  outline: none;  

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  padding-left: 45px;

  &:hover {
    border: 1px solid #b3b3b3;
  }
`;

export const MaxMileageSign = styled.span`
  position: absolute;
  top: 33%;
  transform: translateY(-50%);
  left: 18px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;
`;

export const FilterButton = styled.button`
  width: 136px;
  height: 48px;
  border-radius: 12px;
  padding: 14px 44px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  margin-top: 18px;
  margin-left: 18px;

  &:hover {
    background: #0b44cd;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatalogPageButton = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #3470ff;

  &:hover {
    color: #0b44cd;
  }
`;
