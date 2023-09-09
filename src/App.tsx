import React, {FC, Suspense, useContext} from 'react'
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageLazy} from "./pages/about/AboutPage.lazy";
import {HomePageLazy} from "./pages/home/HomePage.lazy";
import './styles/index.scss'
import {useTheme} from "./theme/ThemeContext";


export const App: FC = () => {

   const {theme, toggleTheme} = useTheme()

    return (
        <div className = {`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to ={'/'}>Home</Link>
            <Link to ={'/about'}>About</Link>
            <Suspense fallback={<span>Loading...</span>}>
             <Routes>
                 <Route path ={'/about'} element={<AboutPageLazy />}/>
                 <Route path ={'/'} element ={<HomePageLazy />}/>
             </Routes>
            </Suspense>
            <Counter/>
        </div>
    )
}
