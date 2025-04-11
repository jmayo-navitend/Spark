import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { script } from "./script.ts";

const root = createRoot(document.getElementById("root")!);
let toggle = true;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// This is a workaround to ensure that the script function is called after the DOM is fully loaded
// and the React app is mounted. It uses a setInterval to check if the root element is not null.
setInterval(() => {
  if (root != null && toggle) {
    toggle = false;
    script();
  }
}, 1);
