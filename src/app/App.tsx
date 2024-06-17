import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

import { Sidebar } from 'widgets/Sidebar'
import { userActions } from 'entities/User'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={'app'}>
            <Suspense fallback={''}>
                <NavBar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
