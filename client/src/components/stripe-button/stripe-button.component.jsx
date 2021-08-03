import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_gN49MdNHEwoummp7Ab7z15Mf';
  const infinityApparalImg = 'https://bit.ly/iarnfinitylogp';
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token
      }
    }).then(resp => {
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment Error: ' , JSON.parse(error));
      alert('Error with your payment. Please use the provided card!');
    });

  };

  return (
    <StripeCheckout
      name='Infinity Apparel'
      allowRememberMe
      label='Pay Now'
      billingAddress
      shippingAddress
      image= {infinityApparalImg}
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );

};

export default StripeCheckoutButton;