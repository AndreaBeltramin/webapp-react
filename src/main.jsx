import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//! import css
import "./css/index.css";

//! import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

//! import App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
