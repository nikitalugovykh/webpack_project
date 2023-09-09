import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {useTheme} from "shared/config/theme";
import {classNames} from "shared/libs/classNames";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";


const App: FC = () => {

   const {theme, toggleTheme} = useTheme()

    return (
        <div className = {classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to ={'/'}>Home</Link>
            <Link to ={'/about'}>About</Link>
            <AppRouter/>
        </div>
    )
}

export default App
