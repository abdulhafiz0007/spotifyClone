import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { PlayerContextProvider } from "./context/PlayerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="spotifyClone">
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </BrowserRouter>
);
