import { ChatListItem } from "features/chat/ui/chatListItem/chatListItem";
import { chatList } from "shared/consts/chatList";
import { Search } from "shared/ui/search";
import styles from "./sidebar.module.scss"

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Search />
            <ul>
                {chatList.map(({ id }) => (
                    <li key={id}>
                        <ChatListItem />
                    </li>
                ))}
            </ul>
        </div>
    );
}
