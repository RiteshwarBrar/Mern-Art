import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';


const PayPalCheckoutButton = ({amount, onSuccess, setCounter}) => {
    const initialOptions = {
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "USD",
    };

    let isPaymentCompleted = false;

    

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{ layout: 'vertical',      // or 'vertical'
                              color: 'silver',        // or 'blue', 'gold', 'black'
                              shape: 'pill',        // or 'rect'
                              label: 'paypal', }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount.toString(), // amount.toString() Replace with the actual amount
                            },
                        }],
                        application_context: {
                            shipping_preference: "NO_SHIPPING" // Disable shipping address
                        }
                    });
                }}
                onApprove={(data, actions) => {
                    if (!isPaymentCompleted) {
                        isPaymentCompleted = true;
                        return actions.order.capture().then(details => {
                            alert('Transaction completed by ' + details.payer.name.given_name);
                            onSuccess();

                            localStorage.removeItem('CheckoutList');
                            localStorage.removeItem('DeliveryInfo');
                            // console.log(localStorage.getItem('CheckoutList'));
                            setCounter((prev)=>prev+1);
                            // Call your backend API to finalize the transaction
                        }).catch(error => {
                            console.error('Error capturing order:', error);
                        });;
                    }
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckoutButton;
