import { ListItemAvatar, ListItemText } from "@mui/material";
import { ChatEntryButton, ChantEntryAvatar } from "./ChatEntry.styled";
import { IChatEntryProps } from "./types";
import { useNavigate } from "react-router-dom";

function ChatEntry({ chatId, avatarUrl, username, lastMessage }: IChatEntryProps) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/chat/${chatId}`)
    }
    return (
        <ChatEntryButton onClick={handleClick}>
            <ListItemAvatar>
                <ChantEntryAvatar alt="Profile Picture" src={avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={username} secondary={lastMessage} />
        </ChatEntryButton>
    );
}

export default ChatEntry;

