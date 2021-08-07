import react from "react";
import reactDOM from "react-dom";

import App from './App'; 
import "./index.css";
import '../src/css.style/Login.css';
import '../src/css.style/singup.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './app/store'
reactDOM.render(
<>
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
  </>,
    document.getElementById("arnold"));

    
