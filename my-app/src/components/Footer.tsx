import React, { CSSProperties } from 'react';
import './App.css';
import { Layout } from 'antd';

const { Footer } = Layout;

function footer(){
    return(
        <Footer style={footerStyle}>Contributors: Abbe, Anu, Ensar, Michelle, Samer, Humayun</Footer>
  );
  
  }
  const footerStyle: CSSProperties = {
    backgroundColor:'#0000ff',    
    width:"100%",
    zIndex:1,
    textAlign: "center",
    color:"white",
    marginTop:"50px",
    height: "40px",
    position: "fixed",
    bottom: "0"
   
  };
  export default footer;