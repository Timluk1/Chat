import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../routes";
import { useAppSelector } from "../../hooks/useAppSelector";

function AppRouter() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    return (
        <Routes>
            {publicRoutes.map(({ path, component}) => {
                return <Route key={path} path={path} Component={component}/>
            })}
            {
                isAuth
                &&
                privateRoutes.map(({ path, component}) => {
                    return <Route key={path} path={path} Component={component}/>
                })
            }
        </Routes>
    )
}

export default AppRouter;
