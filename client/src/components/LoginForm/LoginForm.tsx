import {
    Container,
    FormTitle,
    InputField,
    SubmitButton,
    BoxNavigate,
    VisuallyHiddenInput
} from "./LoginForm.styles";
import { Link as MuiLink, Typography, Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <Container>
            <FormTitle variant="h4">Вход в аккаунт</FormTitle>
            <InputField label="Email" variant="outlined" />
            <InputField label="Пароль" type="password" variant="outlined" />
            <SubmitButton variant="contained">Войти в аккаунт</SubmitButton>
            <BoxNavigate>
                <Typography sx={{ marginRight: "10px" }}>
                    Нет аккаунта?
                </Typography>
                <Link to="/registration">
                    <MuiLink>Зарегистрироваться</MuiLink>
                </Link>
            </BoxNavigate>
        </Container>
    );
}

export default LoginForm;
