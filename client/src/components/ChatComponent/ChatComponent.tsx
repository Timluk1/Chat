import {
    ListItemAvatar,
    ListItemText,
    Avatar,
    Divider,
    List,
} from "@mui/material";
import ChatItem from "../ChatItem/ChatItem";
import MessageInput from "../MessageInput/MessageInput";
import { ChatContainer, ChatEntryButton } from "./ChatComponent.styled";
import { useRef } from "react";


function ChatComponent() {
    const containerRef = useRef(null);

    return (
        <ChatContainer ref={containerRef}>
            <ChatEntryButton>
                <ListItemAvatar>
                    <Avatar
                        alt="Profile Picture"
                        src="https://mui.com/static/images/avatar/3.jpg"
                    />
                </ListItemAvatar>
                <ListItemText primary="Some woman" />
                <Divider />
            </ChatEntryButton>
            <List>
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={false}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={false}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={false}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
                <ChatItem
                    isSender={true}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolore porro reiciendis exercitationem tempora molestias est impedit sit, error, inventore quos excepturi esse! Quod quisquam ducimus veritatis asperiores, tempora vel!"
                />
            </List>
            <MessageInput />
        </ChatContainer>
    );
}

export default ChatComponent;
