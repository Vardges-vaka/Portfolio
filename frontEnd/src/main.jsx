import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// No <StrictMode>: the portfolio was built/tested without it, and several
// canvas/observer effects prefer a single mount in dev.
createRoot(document.getElementById("root")).render(<App />);
