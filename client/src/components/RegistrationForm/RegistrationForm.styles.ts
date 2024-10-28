import { TextField, Button, Typography, Box, styled } from "@mui/material";
import { blue } from "@mui/material/colors";

const Container = styled("div")(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "30rem",
        margin: "0 auto",
        padding: "2rem",
        boxShadow: theme.shadows[10],
        borderRadius: "20px",
    };
});

const InputField = styled(TextField)(() => ({
    width: "100%",
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
    },
}));

const FormTitle = styled(Typography)({
    marginBottom: "40px",
    fontWeight: 600,
});

const SubmitButton = styled(Button)(({ theme }) => {
    return {
        width: "100%",
        padding: "12px",
        backgroundColor: "#1976d2",
        color: "#fff",
        borderRadius: "8px",
        transition: "background-color 0.3s",
        boxShadow: theme.shadows[3],
        marginBottom: "20px",
        "&:hover": {
            background: blue[900]
        }
    }
});

const BoxNavigate = styled(Box)({
    display: "flex",
})

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddProfileImageButton = styled(Button) ({
    marginBottom: "20px",
})

export {Container, BoxNavigate, SubmitButton, FormTitle, InputField, VisuallyHiddenInput, AddProfileImageButton};