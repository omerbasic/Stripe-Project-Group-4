import React, { Component, CSSProperties} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import { loadStripe } from '@stripe/stripe-js';
import StripeLogo from './StripeLogo';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';
const stripePromise = loadStripe('pk_test_51HMTlsJD5SDAJbgRLvNPePxIqzQJmdnTBEjP3t9CiEBpP2gef5CYBC22T54K8gcPVYTxR7VERJcyphbV6C5gz9Iv00nA3PCKtj')


export interface State {
    
}


export class TotalPrice extends Component<{}, State>{

    constructor(props: {}){
        super(props)
    }
    
    // This function is just a test to call the server
    testOnclick() {
        console.log("fetching from api....")
        fetch('/test', {method: 'POST'})
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    // End of the test function 
        handleClick = async (event:any) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await fetch("/api/checkout-session", { method: 'POST' });
    
        const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe!.redirectToCheckout({
          sessionId: session.id,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      };

        render(){

            
            return(
                <CartConsumer>
                    {(contextData: ContextState) => (
                        <div style={CheckoutContainer}>
                            <h3>Card Payment</h3>
                            <p>Proceed with payment via card with</p>
                            <button style={ButtonNoBorder} onClick={this.handleClick}>

                               <StripeLogo></StripeLogo>
                            </button>
                
                        </div>
                    )}
               
                </CartConsumer>
            )
        }
    }
    





export default TotalPrice;


// Styling


export let CheckoutContainer: CSSProperties = {

    backgroundColor: "white",
    borderRadius: "8px",
    margin: "0 auto",
    textAlign: "center",
    padding: "50px",
    width: "100%"

}


export let ButtonNoBorder: CSSProperties = {

    border: "none",
    backgroundColor: "white"

}