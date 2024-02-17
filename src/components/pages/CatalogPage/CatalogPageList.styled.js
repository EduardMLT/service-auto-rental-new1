import styled from 'styled-components';

export const List = styled.ul` 
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
  margin: 50px 0 100px;
`;

export const Item = styled.li`  
  position: relative;
`;

export const ItemDiv = styled.div`
  width: 274px;
  height: 444px;
`;

export const ItemImg = styled.img`
  border-radius: 14px;
`;

export const ItemImgHeart = styled.img`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const TitleSpan = styled.span`
  color: var(--pr-button-background-color);
  font-size: 16px;

  &:hover,
  :focus {
    color: var(--hovered-button-background-color);
  }
`;

export const PageTtd = styled.div`
  font-family: var(--font-family);
  width: 274px;
  min-height: 72px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-direction: column;
  /* margin-left: 40px; */
`;


export const PageH2 = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #121417;
  text-align: left;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PageDiv = styled.div`
  display: block;
`;


export const PageH2span = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #121417;
  margin-bottom: 8px;

  /* display: inline-block; */
`;


export const PageH2color = styled.span`
  color: #3470ff;
`;

export const StyledSVGImage = styled.img`
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  display: inline-block;
  margin-left: 6px;
  margin-right: 6px;
`;



export const PageTtdDiv1 = styled.div`
  /* display: flex; */
  text-align: left;
  margin-bottom: 4px;
  /* margin-left: 40px; */
`;

export const PageTtdDiv2 = styled.div`
  text-align: left;
  margin-bottom: 8px;
  /* margin-left: 40px; */
`;

export const PageSpanTtd = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);

  /* height: 18px; */
`;

export const PageButton = styled.button`  
  position: absolute;
  bottom: 0;
  border-radius: 12px;
  padding: 12px 50px;
  width: 274px;
  height: 44px;
  background: #3470ff;
  
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;

  &:hover {
    background: #0b44cd;
  }
`;