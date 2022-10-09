import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//importing BrowserRouter
//so that I can add routing to this project. 
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

,
document.getElementById('root')
);