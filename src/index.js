import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// el stands for element, we are getting our element from the  id="root" in the main html file in the public folder.
const el = document.getElementById("root");
// Then we are initializing a variable root and creating the root element inside the react-dom file inside of the node-modules folder.
const root = ReactDOM.createRoot(el);
// Then we are rendering the component App to the page
root.render(<App />);