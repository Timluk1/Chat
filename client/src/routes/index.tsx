import { IRoute } from "./types"
import { RoutesName } from "../utils";
import { Login, Registration, Home, Chat } from "../pages";

export const publicRoutes: IRoute[] = [
  {
    path: RoutesName.LOGIN_ROUTE,
    component: Login,
  },
  {
    path: RoutesName.REGISTRATION_ROUTE,
    component: Registration,
  },
]; 

export const privateRoutes: IRoute[] = [
  {
    path: RoutesName.HOME_ROUTE,
    component: Home,
  },
  {
    path: RoutesName.CHAT_ROUTE,
    component: Chat,
  }
]
