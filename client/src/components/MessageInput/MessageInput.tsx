import { TextField, Box, styled, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInputBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "sticky",
    padding: "10px",
    background: theme.palette.grey[900],
    bottom: "0"
}))

const MessageInputField = styled(TextField)(({ theme }) => ({
    width: "100%",
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: theme.palette.grey[600],
        },
    },
}))


function MessageInput() {
    return (
        <MessageInputBox >
            <MessageInputField multiline/>
            <Button>
                <SendIcon />
            </Button>
        </MessageInputBox >
    )
}

export default MessageInput;
