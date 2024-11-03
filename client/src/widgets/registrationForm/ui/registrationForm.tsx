import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailRules } from "shared/lib/formRules";
import { FormInput } from "shared/ui/formInput";
import { IFormInputs } from "shared/ui/formInput";
import styles from "./registrationForm.module.scss";

export function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
        console.log(errors.email)
    };
    const onChange = () => {
        console.log(errors.email)
    }
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.loginForm__title}>Создать аккаунт</h1>
            <img src="" alt="" />
            <input type="text" name="" id="" onChange={onChange}/>
            <FormInput
                register={register}
                rules={emailRules}
                name="email"
                type="text"
                placeholder="Введите email"
                isError={Boolean(errors.email)}
                errorText={errors.email && errors.email.message}
            />
            <FormInput
                register={register}
                name="password"
                type="password"
                placeholder="Введите email"
                isError={true}
                errorText={errors.password && errors.password.message}
            />
            <FormInput
                register={register}
                name="confirmPassword"
                type="password"
                placeholder="Введите email"
                isError={true}
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