import React, {FC, Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

interface AppRouterProps {

}

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Routes>
                {Object.values(routeConfig).map((props) => (
                    <Route key={props.path} {...props} element = {<div className={'page-wrapper'}>{props.element}</div>}/>
                ))}
            </Routes>
        </Suspense>
    )
}
export default AppRouter