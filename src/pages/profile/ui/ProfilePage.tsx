import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/libs/components/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC = () => {
    const { t } = useTranslation('profile')
    return (
        <>
            <DynamicModuleLoader reducers={reducers}>
                <div>{t('Profile page')}</div>
            </DynamicModuleLoader>
        </>
    )
}

export default ProfilePage
