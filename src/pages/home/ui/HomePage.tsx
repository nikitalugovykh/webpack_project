import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'

const HomePage: FC = () => {
    const { t } = useTranslation('home')
    const [value, setValue] = useState('')
    return (
        <>
            <div>{t('Home page')}</div>
            <Input placeholder={'Type text'} value={value} onChange={setValue}/>
        </>
    )
}

export default HomePage
