import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/home";
import {AboutPage} from "pages/about";

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
}


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    }
}