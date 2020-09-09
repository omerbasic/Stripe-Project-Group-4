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

        render(){
            return(
                <CartConsumer>
                    {() => (
                        <div style={CheckoutContainer}>
                            <h3>Card Payment</h3>
                            <p>Proceed with payment via card with</p>
                            <button style={ButtonNoBorder} onClick={this.testOnclick}>

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