import React, { Component} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import CheckoutFracksatt from './checkoutFracksatt';



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
                        <div>
                            Hej här jobbar vi med stripe
                
                        </div>
                    )}
               
                </CartConsumer>
            )
        }
    }
    



export default TotalPrice;