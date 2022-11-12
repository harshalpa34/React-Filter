import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";  
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

