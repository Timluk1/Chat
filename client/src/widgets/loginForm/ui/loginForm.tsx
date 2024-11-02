import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import styles from "./loginForm.module.scss"

export function LoginForm() {
    const handleLogin = (event: React.MouseEvent) => {
        console.log("REGISTER")
        event.preventDefault();
    }
    return (
        <form className={styles.loginForm}>
            <h1 className={styles.loginForm__title}>Войти в аккаунт</h1>
            <input className={styles.loginForm__input} type="email" placeholder="Введите email"/>
            <input className={styles.loginForm__input} type="password" placeholder="Введите пароль"/>
            <Button onClick={handleLogin}>
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

