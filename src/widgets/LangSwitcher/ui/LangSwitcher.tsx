import { type FC } from 'react'
import { cn } from 'shared/libs/cn'
import i18n from 'i18next'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t } = useTranslation()

    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button theme={'clear'} onClick={toggleLanguage} className={cn('', {}, [className])}
        >
            {t('Language')}
        </Button>
    )
}
