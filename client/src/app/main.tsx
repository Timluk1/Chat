import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./routers/AppRouter.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App>
                <AppRouter />
            </App>
        </BrowserRouter>
    </StrictMode>
);
