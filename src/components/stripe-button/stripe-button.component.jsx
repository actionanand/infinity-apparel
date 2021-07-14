import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_gN49MdNHEwoummp7Ab7z15Mf';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      name='Infinity Apparel'
      allowRememberMe
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );

};

export default StripeCheckoutButton;