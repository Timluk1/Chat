import { Login } from "pages/login";
import { Registration } from "pages/registration";
import { Home } from "pages/home";
import { Chat } from "pages/chat";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IRoute {
    path: string
    Component: ReactNode
}

const publicRoutes: IRoute[] = [
    {
        path: "login",
        Component: <Login />
    },
    {
        path: "registration",
        Component: <Registration />
    },
    {
        path: "*",
        Component: <Navigate to="login" />
    }
];

const privateRoutes: IRoute[] = [
    {
        path: "home",
        Component: <Home />
    },
    {
        path: "chat/:id",
        Component: <Chat />
    },
    {
        path: "*",
        Component: <Navigate to="home" />
    }
];

export { publicRoutes, privateRoutes }