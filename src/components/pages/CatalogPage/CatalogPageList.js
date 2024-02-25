import React, { useEffect } from 'react';

import {
  List,
  Item,
  ItemDiv,
  ItemImg,
  ItemImgHeart,
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

import heartFilled from '../../img/heartFilled.svg';
import heartOutline from '../../img/heartOutline.svg';


export const HomeList = ({ items, openModal, favorites, setFavorites }) => {
  // console.log('HomeList', { items }, { favorites });
 
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);

  const toggleFavorite = id => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(item => item !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const parseAddress = address => {
    const addressArray = address.split(',');
    // const street = addressArray[0];
    const city = addressArray[1];
    const state = addressArray[2];
    return { city, state };
  };

  return (
    <List>
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
            address,
          },
          index
        ) => {
          const { city, state } = parseAddress(address);
          const isFavorite = favorites.includes(id);
          const heartIcon = isFavorite ? heartFilled : heartOutline;
          
          return (
            <Item key={id}>
              <ItemDiv>
                <div>
                  <ItemImg src={img} width="274" height="268" alt="car" />
                  <ItemImgHeart
                    src={heartIcon}
                    alt="Heart"
                    onClick={() => toggleFavorite(id)}
                  />
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
                    <PageSpanTtd>{city}</PageSpanTtd>
                    <StyledSVGImage src={VerticalTrait} alt="Vertical trait" />
                    <PageSpanTtd>{state}</PageSpanTtd>
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
                  <PageButton onClick={() => openModal(index)}>
                    Learn more
                  </PageButton>
                </PageTtd>
              </ItemDiv>
            </Item>
          );
        }
      )}
    </List>
  );
};
