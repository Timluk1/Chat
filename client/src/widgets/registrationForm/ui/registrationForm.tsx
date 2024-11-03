import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import styles from "./registrationForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
    repeatPassword: string;
};

export function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.loginForm__title}>Создать аккаунт</h1>
            {/* Изображение пользователя (аватарка)*/}
            <img src="" alt="" />
            <input
                className={styles.loginForm__input}
                {...register("email", {
                    required: "Email is required",
                })}
                defaultValue=""
                type="email"
                placeholder="Введите email"
            />
            <input
                {...register("password", {
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[%$#&@]).{9,}$/,
                        message:
                            "Password must be at least 9 characters long and contain at least one special character (%$#&@)",
                    },
                })}
                className={styles.loginForm__input}
                defaultValue=""
                type="password"
                placeholder="Введите пароль"
            />
            <input
                {...register("repeatPassword")}
                defaultValue=""
                className={styles.loginForm__input}
                type="password"
                placeholder="Повторите пароль"
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
