import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App1 from "./App1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
    {/* <App />  Multiple Tabs can open at a time*/}
  </React.StrictMode>
);
