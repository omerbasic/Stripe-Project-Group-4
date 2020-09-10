import React, { CSSProperties } from 'react';


function StripeLogo(){


    let logoStyle:CSSProperties  ={        
        width: "150px",
        margin: "10px"
        
    }
    const StripeLogo = require("./../image/stripe.png")
    return(
        <img src={StripeLogo} alt="stripe-logo" style={logoStyle} />
    );
}

export default StripeLogo;