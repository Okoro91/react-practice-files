import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./src/App";

const root = createRoot(document.querySelector("#root"));

root.render(
  <div>
    <App />
  </div>
);
