import { type FC, Suspense } from 'react'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
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
