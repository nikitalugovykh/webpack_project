import React, {FC} from 'react'
import {useTheme} from "shared/config/theme";
import {cn} from "shared/libs/cn";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";


const App: FC = () => {

    const {theme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])}>
            <NavBar/>
            <div className={'content-page'}>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App
