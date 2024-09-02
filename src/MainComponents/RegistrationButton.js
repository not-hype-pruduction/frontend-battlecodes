import React from 'react'

const RegistrationButton = (link) => {
    return (
        <button className = 'registration-button'>
            <a src={'/'}>
                Регистрация
            </a>
        </button>
    )
}

export default RegistrationButton;

// посмотреть роутинг и хук useNavigation