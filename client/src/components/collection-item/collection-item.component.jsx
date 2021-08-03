import React from 'react';
import { connect } from 'react-redux';

import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, NameContainer, 
  PriceContainer, AddToCartButton } from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem }) => {
  const {name, price, imageUrl} = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className='collection-item-img' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer> {name} </NameContainer>
        <PriceContainer> {price} </PriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton inverted onClick={() => addItem(item)}>Add to cart</AddToCartButton>
    </CollectionItemContainer>)
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);