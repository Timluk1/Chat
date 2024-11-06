import { UseFormRegister, RegisterOptions, FieldValues, Path } from "react-hook-form";
import styles from "./formInput.module.scss";

// Интерфейсы для полей форм
export interface IFormRegistrInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IFormLoginInputs {
    email: string;
    password: string;
}

// Типизация пропсов для FormInput
interface FormInputProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: keyof T;
    type: string;
    placeholder: string;
    isError: boolean;
    errorText?: string;
    rules?: RegisterOptions<T>;
}

// Компонент FormInput с обобщённой типизацией
export function FormInput<T extends IFormRegistrInputs | IFormLoginInputs>({
    register,
    name,
    type,
    placeholder,
    isError,
    errorText,
    rules,
}: FormInputProps<T>) {
    return (
        <div className={styles.formInputBox}>
            <input
                {...register(name as Path<T>, rules)}
                type={type}
                placeholder={placeholder}
                className={`${styles.formInput} ${isError ? styles.formInputError : ""}`}
            />
            {isError && <p className={styles.errorText}>{errorText}</p>}
        </div>
    );
}