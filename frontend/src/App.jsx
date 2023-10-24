/*import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
root.render(<App tab="home" />);
import axios from 'axios';
import FrontPage from "./FrontPage";
import MintingPage from "./MintingPage";
//import pinFileToIPFS from "./scripts/pinToIPFS";
//import WalletBalance from "./components/WalletBalance";

function App(){
    if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
    return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/MintingPage" element={<MintingPage />} />
         
        </Routes>
      </BrowserRouter>
    );
}

export default App;
*/



/*
import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import FrontPage from './FrontPage';
import MintingPage from './MintingPage';

// Define the 'root' variable using createRoot
const root = createRoot(document.getElementById('app'));

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/MintingPage" element={<MintingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render your app using 'root'
root.render(<App />);
export default App;
*/

/*
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import FrontPage from './FrontPage';
import MintingPage from './MintingPage';

const root = createRoot(document.getElementById('root'));

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/MintingPage" element={<MintingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);

export default App; // Export 'App' as the default export
*/


import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import FrontPage from './FrontPage';
import MintingPage from './MintingPage';

const root = createRoot(document.getElementById('root')); // Correct target container

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/MintingPage" element={<MintingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />); // Render your app using 'root'


