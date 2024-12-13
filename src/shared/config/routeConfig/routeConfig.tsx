import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import { NotFoundPage } from 'pages/notFount'
import { ProfilePage } from 'pages/profile'

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
    PROFILE = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

    // должен быть в конце
    [AppRoutes.NOT_FOUND]: '*'
}

export type RouteConfigType = Record<AppRoutes, RouteProps>

export const routeConfig: RouteConfigType = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    }
}
