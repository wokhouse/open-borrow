import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssVarsProvider, Sheet } from "@mui/joy";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <Sheet>
        <App />
      </Sheet>
    </CssVarsProvider>
  </React.StrictMode>
);
