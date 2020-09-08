import React, { Component, CSSProperties} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import CheckoutFracksatt from './checkoutFracksatt';
import { Button } from 'antd';
import StripeLogo from './StripeLogo'



export interface State {
    
}


export class TotalPrice extends Component<{}, State>{

    constructor(props: {}){
        super(props)
    }
      


        render(){
            return(
                <CartConsumer>
                    {() => (
                        <div style={CheckoutContainer}>
                            <h3>Checkout</h3>
                            <p>Proceed with your payment with</p>
                            <Button style={ButtonNoBorder}>
                               <StripeLogo></StripeLogo>
                            </Button>
                
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
    padding: "50px"

}


export let ButtonNoBorder: CSSProperties = {

    border: "none"

}