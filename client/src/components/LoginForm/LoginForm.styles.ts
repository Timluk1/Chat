import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { Theme } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
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
}))

const InputField = styled(TextField)({
    width: "100%",
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
    },
});

const FormTitle = styled(Typography)({
    marginBottom: "40px",
    fontWeight: 600,
});

const SubmitButton = styled(Button)(({ theme }: { theme: Theme }) => ({
    width: "100%",
    padding: "12px",
    backgroundColor: "#1976d2",
    color: "#fff",
    borderRadius: "8px",
    transition: "background-color 0.3s",
    boxShadow: theme.shadows[3], 
    marginBottom: "20px",
    "&:hover": {
        background: blue[900],
    },
}));

const BoxNavigate = styled(Box)({
    display: "flex",
});


export { Container, BoxNavigate, SubmitButton, FormTitle, InputField };
