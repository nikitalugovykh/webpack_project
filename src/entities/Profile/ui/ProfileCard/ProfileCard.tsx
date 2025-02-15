import { type FC } from 'react'
import { cn } from 'shared/libs/className'
import styles from './ProfileCard.module.scss'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface ProfileCardProps {
    className?: string
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const data = useAppSelector(getProfileData)
    // const isLoading = useAppSelector(getProfileIsLoading)
    // const error = useAppSelector(getProfileError)

    return (
        <div
            className={cn(styles.ProfileCard, {}, [className])}
        >
            <div className={styles.header}>
                <Text text={t('Profile')}/>
                <Button className={styles.editBtn} theme={'outline'}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input value={data?.first}
                    placeholder={t('First name')}
                    className={styles.input}
                />
                <Input value={data?.last}
                    placeholder={t('Last name')}
                    className={styles.input}
                />
            </div>
        </div>
    )
}

export default ProfileCard
