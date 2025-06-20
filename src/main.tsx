// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const root = document.getElementById("root")!;
// const clientId = "478956819514-sb99igu8n84fga6kp0kvrneb3nubeljn.apps.googleusercontent.com";
 

// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={clientId}>
//       <App />
//     </GoogleOAuthProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom"; // ✅ import this
import "./index.css";

const root = document.getElementById("root")!;
const clientId = "478956819514-sb99igu8n84fga6kp0kvrneb3nubeljn.apps.googleusercontent.com";

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter> {/* ✅ Add this wrapper */}
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

