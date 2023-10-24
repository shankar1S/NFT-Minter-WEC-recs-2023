/*import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
*/



/*
import React from 'react';
//import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

import App from './App';

// Use createRoot to render your app
const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/


import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

