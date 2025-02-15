import { type FC, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/libs/components/DynamicModuleLoader'
import { fetchProfileDataThunk, profileReducer, ProfileCard } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileDataThunk())
    }, [dispatch])

    return (
        <>
            <DynamicModuleLoader reducers={reducers}>
                <ProfileCard/>
            </DynamicModuleLoader>
        </>
    )
}

export default ProfilePage
