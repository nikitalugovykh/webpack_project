import { type FC, Suspense } from 'react'
import { useTheme } from 'shared/config/theme'
import { cn } from 'shared/libs/className/cn'
import './styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={cn('app', {}, [theme])}>
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
