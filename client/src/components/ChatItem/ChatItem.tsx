import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IChatItemProps } from "./types";

const ChatItemBox = styled(Box)(({ theme }) => {
    return {
        background: theme.palette.mode === "dark" ? theme.palette.grey[900]: theme.palette.grey[100],
        color: theme.palette.text.primary,
        marginBottom: "20px",
        borderRadius: "8px",
        padding: "8px",
        maxWidth: "50%",
        overflowWrap: "break-word",
    }
});


const ChatItemContainer = styled(Box, { shouldForwardProp: (prop) => prop !== "isSender" })<{ isSender: boolean }>(({ isSender }) => {
    return {
        display: "flex",
        justifyContent: isSender ? "flex-end" : "flex-start",
    };
});

function ChatItem({ text, isSender }: IChatItemProps) {
    return (
        <ChatItemContainer isSender={isSender}>
            <ChatItemBox>
                <Typography>{text}</Typography>
            </ChatItemBox>
        </ChatItemContainer>
    );
}

export default ChatItem;
