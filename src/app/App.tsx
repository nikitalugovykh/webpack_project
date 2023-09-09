import React, {FC, Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {useTheme} from "shared/config/theme";
import {AboutPage} from "pages/about";
import {HomePage} from "pages/home";
import {classNames} from "shared/libs/classNames";
import './styles/index.scss'


const App: FC = () => {

   const {theme, toggleTheme} = useTheme()

    return (
        <div className = {classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to ={'/'}>Home</Link>
            <Link to ={'/about'}>About</Link>
            <Suspense fallback={<span>Loading...</span>}>
             <Routes>
                 <Route path ={'/about'} element={<AboutPage />}/>
                 <Route path ={'/'} element ={<HomePage />}/>
             </Routes>
            </Suspense>
        </div>
    )
}

export default App
