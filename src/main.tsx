import { createRoot } from "react-dom/client";
import App from "@/app/ui";
import "@/app/style/index.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
