import { Container, FormTitle, InputField, SubmitButton, BoxNavigate, VisuallyHiddenInput, AddProfileImageButton } from "./RegistrationForm.styles";
import { Typography, Link as MuiLink } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
};

function RegistrationForm() {
    const { handleSubmit, control, watch, formState: { errors } } = useForm<FormData>();
    const [fileName, setFileName] = useState<string | null>(null);

    const onChangeImage: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = (event.target as HTMLInputElement).files || [];
        setFileName(files[0]?.name || null);
    };

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    // Поле `password` будет доступно для проверки на совпадение паролей
    const password = watch("password");

    return (
        <Container>
            <FormTitle variant="h4">Регистрация</FormTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Email обязателен",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Неверный формат email"
                        }
                    }}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            label="Email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ""}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Пароль обязателен",
                        minLength: {
                            value: 9,
                            message: "Пароль должен быть не менее 9 символов"
                        },
                        pattern: {
                            value: /[!@#$%^&*]/,
                            message: "Пароль должен содержать специальные символы %$#&@!"
                        }
                    }}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            label="Пароль"
                            type="password"
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ""}
                        />
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Подтверждение пароля обязательно",
                        validate: value =>
                            value === password || "Пароли не совпадают"
                    }}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            label="Повторите пароль"
                            type="password"
                            variant="outlined"
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                        />
                    )}
                />
                <AddProfileImageButton
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Загрузить фото профиля
                    <VisuallyHiddenInput
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={onChangeImage}
                        multiple
                    />
                </AddProfileImageButton>
                {fileName && <Typography sx={{ marginBottom: "20px" }}>{fileName}</Typography>}
                <SubmitButton type="submit" variant="contained">Зарегистрироваться</SubmitButton>
            </form>
            <BoxNavigate>
                <Typography sx={{ marginRight: "10px" }}>Есть аккаунт?</Typography>
                <Link to="/login">
                    <MuiLink component="span">Войти</MuiLink>
                </Link>
            </BoxNavigate>
        </Container>
    );
}

export default RegistrationForm;
