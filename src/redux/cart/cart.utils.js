export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === cartItemsToAdd.id
  });

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemsToAdd.id ? 
      {...cartItem, qantity: cartItem.qantity + 1} : cartItem
    );
  }

  return [...cartItems, {...cartItemsToAdd, qantity: 1}];
};