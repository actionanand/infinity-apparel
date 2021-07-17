import React from 'react';

import { CartItemContainer, ImageContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({item: { name, price, imageUrl, quantity }}) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt={name}/>
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;