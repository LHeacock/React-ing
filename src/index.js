import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App"
createRoot(
    document.getElementById("root")
).render(< App/>)


/* create root function creates an anchor into the DOM
render function for the anchor takes a react element coverts into the dom
*/