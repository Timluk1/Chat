export const emailRules = {
    required: "Email обязателен" ,
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Неккоректный email",
    }
}

export const passwordRules = {
    required: "Пароль обязателен",
    minLength: {
        value: 9,
        message: "Длинна пароля должна быть минимум 9 символов",
    },
    pattern: {
        value: /[%$#&@]/,
        message: "В пароле должен быть хотя бы один из символов %$#&@",
    },
    
}

export const confirmPasswordRules = {
    required: "Повтор пароля обязателен",
    minLength: {
        value: 9,
        message: "Длинна пароля должна быть минимум 9 символов",
    },
    pattern: {
        value: /[%$#&@]/,
        message: "В пароле должен быть хотя бы один из символов %$#&@",
    },
}