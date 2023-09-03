import React, {FC, Suspense} from 'react'
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from 'react-router-dom'
import './index.scss'
import {AboutPageLazy} from "./pages/about/AboutPage.lazy";
import {HomePageLazy} from "./pages/home/HomePage.lazy";


export const App: FC = () => {
    return (
        <div className = {'app'}>

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
