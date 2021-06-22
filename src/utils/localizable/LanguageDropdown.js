import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { appStrings } from './appStrings'

const languageOptions = [
    {
        key: 'en',
        text: appStrings.english,
        value: 'en',
        flag: 'us'
    },
    {
        key: 'es',
        text: appStrings.spanish,
        value: 'es',
        flag: 'es'
    },
    {
        key: 'ca',
        text: appStrings.catalan,
        value: 'ca',
        flag: 'es ca'
    },
]


const LanguageDropdown = ({ changeLanguage }) => {
    return (
        <Dropdown
            fluid
            selection
            onChange={changeLanguage}
            options={languageOptions}
        />
    )
}

export default LanguageDropdown