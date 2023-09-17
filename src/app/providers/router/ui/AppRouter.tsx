import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: FC = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map((props) => (
                <Route key={props.path} {...props} element={
                    <Suspense fallback={<PageLoader/>}>
                        <div className={'page-wrapper'}>{props.element}</div>
                    </Suspense>
                }/>
            ))}
        </Routes>
    )
}
export default AppRouter
