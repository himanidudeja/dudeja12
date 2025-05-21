import React from "react";
import ReactDOM from "react-dom/client";
//  This imports the ReactDOM client API, which is used to render your app to the real DOM 
import { BrowserRouter } from "react-router-dom";  // Keep only one BrowserRouter
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>  
    <App />
  </BrowserRouter>
);
