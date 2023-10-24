import {BrowserRouter, Routes, Route } from "react-router-dom";
import MyButton from "../App.js"
import MintingPage from "../MIntingPage.js"
//import { NavLink } from "react-router-dom"


function MainRouter(){
    return(
        <BrowserRouter>
           <Routes>
                
                    <Route path ="/"element={<App />} />
                    <Route path ="/MintingPage"element={<MintingPage />} />
                
                   
                    
                    
               </Routes>
            
        </BrowserRouter>
    )
}
export default FrontPage;


/*
import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h2>Front Page</h2>
      <Link to="/mint-nft">
        <button>Mint NFTs</button>
      </Link>
    </div>
  );
}

export default FrontPage;

