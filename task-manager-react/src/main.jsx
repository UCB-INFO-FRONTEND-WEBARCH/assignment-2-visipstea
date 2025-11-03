import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// import a1 css file (layout,colors, responsive consistent)
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* stop error */}
    <App />
  </React.StrictMode>
);
