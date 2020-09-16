import React from 'react';
import ProductList from './ProductList';
import ProductView from './ProductView';
import {Route, Switch, withRouter} from 'react-router-dom';
import Checkout from './Checkout';
import Cart from './Cart'




/** React function component */
function Views() {
        console.log('hejhej')
        return (
        
        <Switch>
            <Route path="/checkout" component = {Checkout} />
            <Route path="/product/:view" component = {ProductView}/>
            <Route path="/" component = {ProductList} />
            {/* <Route path="/success" component={SuccessView} /> */}

        </Switch>
        
            
            );
            
        }

export default withRouter(Views)