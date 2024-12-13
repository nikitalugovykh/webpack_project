import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import { RoutePath } from 'shared/config/routeConfig'

export interface SidebarItemType {
    path: string
    text: string
    Icon: any
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.home,
        text: 'Home page' as const,
        Icon: HomeIcon
    },
    {
        path: RoutePath.about,
        text: 'About page' as const,
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Profile page' as const,
        Icon: HomeIcon
    }
]
