import React from 'react';

import {
  List,
  Item,
  ItemDiv,
  PageH2,
  PageDiv,
  PageH2span,
  PageH2color,
  PageTtd,
  PageTtdDiv1,
  PageTtdDiv2,
  PageSpanTtd,
  StyledSVGImage,
  PageButton,
} from './CatalogPageList.styled';

import VerticalTrait from '../../img/verticalTrait.svg';

export const HomeList = ({ items, openModal }) => {
  return (
    <List>
      {console.log('HomeList', { items })}
      {items.map(
        (
          {
            id,
            make,
            model,
            img,
            year,
            rentalCompany,
            type,
            functionalities,
            rentalPrice,
          },
          index
        ) => (
          // console.log({  make, model});

          <Item key={id}>
            <ItemDiv onClick={() => openModal(index)}>
              <div>
                <img src={img} width="274" height="268" alt="car" />
              </div>
              <PageTtd>
                <PageH2>
                  <PageDiv>
                    {make} <PageH2color>{model}</PageH2color> , {year}{' '}
                  </PageDiv>
                  <PageDiv>
                    <PageH2span>{rentalPrice}</PageH2span>
                  </PageDiv>
                </PageH2>

                <PageTtdDiv1>
                  <PageSpanTtd>Kiev</PageSpanTtd>
                  <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                  <PageSpanTtd>Ukraine</PageSpanTtd>
                  <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                  <PageSpanTtd>{rentalCompany}</PageSpanTtd>
                  <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                  <PageSpanTtd>Premium</PageSpanTtd>
                </PageTtdDiv1>
                <PageTtdDiv2>
                  <PageSpanTtd>{type}</PageSpanTtd>
                  <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                  <PageSpanTtd>{model}</PageSpanTtd>
                  <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                  <PageSpanTtd>{id}</PageSpanTtd>
                  <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                  <PageSpanTtd>{functionalities[0]}</PageSpanTtd>
                </PageTtdDiv2>
                <PageButton onClick={() => {}}>Learn more</PageButton>
              </PageTtd>
            </ItemDiv>
          </Item>
        )
      )}
    </List>
  );
};
