import styled from 'styled-components';

export const FilterDiv = styled.div`
  display: flex;
`;

export const BrandDiv = styled.div`
  width: 224px;
  height:48px;
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



