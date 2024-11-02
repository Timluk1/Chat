import { messagees } from "shared/consts/messges";
import { ChatMessage } from "features/chat";
import styles from "./mainChat.module.scss"

export function MainChat() {
    return (
        <div className={styles.mainChat}>
            <ul className={styles.mainChat__list + " " + styles.messagesList}>
                {messagees.map((message) => (
                    <li className={`${styles.messagesList__item} ${message.isUser ? styles.userMessage : styles.opponentMessage}`} key={message.id}>
                        <ChatMessage
                            text={message.text}
                            time={message.time}
                            isUser={message.isUser}
                            isRead={message.isRead}
                        />
                    </li>
                ))}
            </ul>   
        </div>
    );
}