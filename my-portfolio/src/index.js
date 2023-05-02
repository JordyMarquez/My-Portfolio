// Uses react module as an entry point to the React library, for building user interfaces
import React from 'react';

// Imports react-dom which provides acces to DOM-specific methods
import ReactDOM from 'react-dom';

import App from './App';

// ReactDOM.render takes React components and renders them to the DOM
// The first argument is the component we want to renter (<App/>) and second is the target element to render to (#root)
ReactDOM.render(<App />, document.getElementById('root'));