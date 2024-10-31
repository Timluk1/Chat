import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

export function AppRouter() {
    const isAuth = true;
    return (
        <>
            <Routes>
                {isAuth &&
                    privateRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={Component} />
                    ))}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={Component} />
                ))}
            </Routes>
        </>
    );
}
