import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import styles from "./registrationForm.module.scss";

export function RegistrationForm() {
    return (
        <form className={styles.loginForm}>
            <h1 className={styles.loginForm__title}>Создать аккаунт</h1>
            {/* Изображение пользователя (аватарка)*/}
            <img src="" alt="" />
            <input
                className={styles.loginForm__input}
                type="email"
                placeholder="Введите email"
            />
            <input
                className={styles.loginForm__input}
                type="password"
                placeholder="Введите пароль"
            />
            <input
                className={styles.loginForm__input}
                type="password"
                placeholder="Повторите пароль"
            />
            <label className={styles.inputFile}>
	   	        <input type="file" name="file"/>
 	   	        <span className={styles.inputFileBtn}>Выберите изображение</span>           
	   	        <span className="input-file-text"></span>
 	        </label>
            <Button>Зарегистрироваться</Button>
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
