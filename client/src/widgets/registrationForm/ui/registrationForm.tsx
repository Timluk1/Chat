import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailRules, passwordRules } from "shared/lib/formRules";
import { FormInput } from "shared/ui/formInput";
import { IFormInputs } from "shared/ui/formInput";
import styles from "./registrationForm.module.scss";

export function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        trigger
    } = useForm<IFormInputs>();

    const password = watch("password");
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
    };

    // Вызов триггера при уходе фокуса с инпута
    const handleBlur = async (fieldName: keyof IFormInputs) => {
        await trigger(fieldName);
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.loginForm__title}>Создать аккаунт</h1>
            <img src="" alt="" />
            
            <FormInput
                register={register}
                rules={emailRules}
                onBlur={() => handleBlur("email")}
                name="email"
                type="text"
                placeholder="Введите email"
                isError={Boolean(errors.email)}
                errorText={errors.email && errors.email.message}
            />
            <FormInput
                register={register}
                rules={passwordRules}
                name="password"
                type="password"
                onBlur={() => handleBlur("password")}
                placeholder="Введите пароль"
                isError={Boolean(errors.password)}
                errorText={errors.password && errors.password.message}
            />
            <FormInput
                register={register}
                rules={{
                    validate: (confirmPassword) => {
                        return confirmPassword === password || "Пароли не совпадают";
                    }
                }}
                name="confirmPassword"
                type="password"
                onBlur={() => handleBlur("confirmPassword")}
                placeholder="Подтвердите пароль"
                isError={Boolean(errors.confirmPassword)}
                errorText={errors.confirmPassword && errors.confirmPassword.message}
            />

            <label className={styles.inputFile}>
                <input type="file" name="file" accept="image/png, image/jpeg" />
                <span className={styles.inputFileBtn}>
                    Выберите изображение
                </span>
                <span className="input-file-text"></span>
            </label>
            <Button type="submit">Зарегистрироваться</Button>
            <div
                className={
                    styles.loginForm__navigation + " " + styles.navigation
                }
            >
                <p className={styles.navigation__text}>Есть аккаунт?</p>
                <Link className={styles.navigation__link} to="/login">
                    Войти
                </Link>
            </div>
        </form>
    );
}
