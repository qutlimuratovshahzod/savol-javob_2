import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./Context/UseContext";
import TestContextProvider from "./Context/TestContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <TestContextProvider>
        <App />
        </TestContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);