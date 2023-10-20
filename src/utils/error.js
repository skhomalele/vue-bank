const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'Неверный логин или пароль',
    auth: 'Пожалуйста, авторизуйтесь'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}