import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailRules, passwordRules } from "shared/lib/formRules";
import { FormInput } from "shared/ui/formInput";
import { IFormRegistrInputs } from "shared/ui/formInput";
import { InputImage } from "shared/ui/inputImage";
import { useRef } from "react";
import { useRegistrationMutation } from "features/auth/model/authApi";
import { setAccessToken } from "features/auth/model/authSlice";
import styles from "./registrationForm.module.scss";
import { useAppDispatch } from "shared/lib/store/redux";

export function RegistrationForm() {
    const inputImageRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormRegistrInputs>({ mode: "onBlur" });
    const password = watch("password");

    const [registration] = useRegistrationMutation();

    const onSubmit: SubmitHandler<IFormRegistrInputs> = async (data) => {
        // если есть фотка
        if (inputImageRef.current?.files) {
            // данные для регистрации
            const requestData = {
                email: data.email,
                password: data.password,
                image: inputImageRef.current.files[0],
            };
            // запрос на регистрацию
            const result = await registration(requestData);
            if (result.data) {
                dispatch(setAccessToken(result.data.token));
            }
        } else {
            alert("Вы не добавили фото");
        }
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.loginForm__title}>Создать аккаунт</h1>
            <img src="" alt="" />

            <FormInput
                register={register}
                rules={emailRules}
                name="email"
                type="text"
                placeholder="Введите email"
                isError={Boolean(errors.email)}
                errorText={errors.email?.message}
            />
            <FormInput
                register={register}
                rules={passwordRules}
                name="password"
                type="password"
                placeholder="Введите пароль"
                isError={Boolean(errors.password)}
                errorText={errors.password?.message}
            />
            <FormInput
                register={register}
                rules={{
                    validate: (confirmPassword) => {
                        return (
                            confirmPassword === password ||
                            "Пароли не совпадают"
                        );
                    },
                }}
                name="confirmPassword"
                type="password"
                placeholder="Подтвердите пароль"
                isError={Boolean(errors.confirmPassword)}
                errorText={errors.confirmPassword?.message}
            />

            <InputImage inputImageRef={inputImageRef} />
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
