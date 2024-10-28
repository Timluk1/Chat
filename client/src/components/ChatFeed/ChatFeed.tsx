import { List, Divider } from "@mui/material";
import ChatEntry from "../ChatEntry/ChatEntry";
import { ChatFeedContainer, ChatFeedTitle } from "./ChatFeed.styled"
import { chatEntries } from "../../data/chatEntries";

function ChatFeed() {
    return (
        <ChatFeedContainer>
            <ChatFeedTitle variant="h4">
                Messages
            </ChatFeedTitle>
            <Divider />
            <List>
                {
                    chatEntries.map((props) => <ChatEntry key={props.chatId} {...props}/>)
                }
            </List>
        </ChatFeedContainer>
    );
}

export default ChatFeed;
