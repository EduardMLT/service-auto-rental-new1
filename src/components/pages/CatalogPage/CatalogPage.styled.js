import styled from 'styled-components';

export const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LabelBrandDiv = styled.div`
  width: 224px;
  height: 48px;
  border-radius: 14px;
`;

export const PriceDiv = styled.div`
  margin-right: 18px;
  margin-left: 18px;
`;

export const LabelPrice = styled.label`
  display: block;
  height: 74px;  
`;

export const InputPrice = styled.input`
  display: block;
  width: 125px;
  height: 48px;
  border-radius: 14px;
`;

export const LabelMileage = styled.label`
  display: block;  
  height: 74px;
`;

export const InputMinMileage = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border-radius: 14px 0 0 14px;
`;

export const InputMaxMileage = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border-radius: 0 14px  14px 0;
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



