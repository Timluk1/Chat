import ChatComponent from "../components/ChatComponent/ChatComponent";
import ChatFeed from "../components/ChatFeed/ChatFeed";
import { styled, Container } from "@mui/material";

const ChatContainer2 = styled(Container)(({ theme }) => ({
    display: "flex",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    position: "relative",
}));

function Chat() {
    return (
        <ChatContainer2>
            <ChatFeed />
            <ChatComponent />
        </ChatContainer2>
    );
}

export default Chat;
