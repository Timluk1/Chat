import styles from "./formInput.module.scss";

interface FormInputProps {
    type: string;
    placeholder: string;
    isError: boolean;
    errorText?: string;
    // Добавим пропс ref для передачи register
    inputRef?: React.Ref<HTMLInputElement>;
}

export function FormInput({ type, placeholder, isError, errorText, inputRef }: FormInputProps) {
    return (
        <div className={styles.formInputBox}>
            <input
                ref={inputRef} // Привязываем ref
                type={type}
                placeholder={placeholder}
                className={`${styles.formInput} ${isError ? styles.formInputError : ""}`}
            />
            {isError && <p className={styles.errorText}>{errorText}</p>}
        </div>
    );
}
