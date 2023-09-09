import React, {FC} from 'react'
import {useTheme} from "shared/config/theme";
import {cn} from "shared/libs/cn";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";


const App: FC = () => {

   const {theme} = useTheme()

    return (
        <div className = {cn('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}

export default App
