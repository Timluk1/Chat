import { UseFormRegister, RegisterOptions } from "react-hook-form";
import styles from "./formInput.module.scss";

export interface IFormInputs {
    email: string;
    password: string;
    confirmPassword: string;
};

interface FormInputProps {
    // for react-hook-form
    register: UseFormRegister<IFormInputs>
    name: "email" | "password" | "confirmPassword"
    // for input element
    type: string
    placeholder: string
    isError: boolean
    errorText?: string
    rules?: RegisterOptions<IFormInputs>;
}

export function FormInput({ register, name, type, placeholder, isError, errorText, rules  }: FormInputProps) {
    return (
        <div className={styles.formInputBox}>
            <input
                {...register(name, rules)}
                type={type}
                placeholder={placeholder}
                className={`${styles.formInput} ${isError ? styles.formInputError : ""}`}
            />
            {isError && <p className={styles.errorText}>{errorText}</p>}
        </div>
    );
}