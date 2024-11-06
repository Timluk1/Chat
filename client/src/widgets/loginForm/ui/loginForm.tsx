import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import { FormInput } from "shared/ui/formInput";
import { emailRules } from "shared/lib/formRules";
import { useForm } from "react-hook-form";
import { IFormRegistrInputs } from "shared/ui/formInput";
import styles from "./loginForm.module.scss"

export function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormRegistrInputs>({ mode: "onBlur" });
    
    const onSubmit = (data: IFormRegistrInputs) => {
        console.log(data);
    };
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.loginForm__title}>Войти в аккаунт</h1>
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
                name="password"
                type="password"
                placeholder="Введите пароль"
                isError={true}
                errorText={"Ошибка"}
            />
            <Button type="submit">
                Войти
            </Button>
            <div className={styles.loginForm__navigation + " " + styles.navigation}>
                <p className={styles.navigation__text}>Нет аккаунта?</p>
                <Link className={styles.navigation__link} to="/registration">
                    Зарегистрироваться
                </Link>
            </div>
        </form>
    );
}

