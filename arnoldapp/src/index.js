import react from "react";
import reactDOM from "react-dom";
import App from './App';
import "./index.css";
import '../src/css.style/Login.css';
import '../src/css.style/singup.css';
import {BrowserRouter} from 'react-router-dom';
reactDOM.render(
<>
<BrowserRouter>
<App />
</BrowserRouter>
  </>,
    document.getElementById("arnold"));

