import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//! import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

//! import css
import "./css/index.css";
//! import App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
