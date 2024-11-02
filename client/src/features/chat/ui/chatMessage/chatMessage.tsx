import styles from "./chatMessage.module.scss"

interface ChatMessgeProps {
    text: string
    time: string
    isUser: boolean
    isRead?: boolean
}

export function ChatMessage({text, time, isUser, isRead}: ChatMessgeProps) {
    return (
        <div className={styles.chatMessage + " " + (isUser ? styles.chatMessageUser: styles.chatMessageOpponent)}>
            <p className={styles.chatMessage__text}>{text}</p>
            <div>
                <p className={isUser ? styles.chatMessageUser__time: styles.chatMessageOpponent__time}>{time}</p>
            </div>
        </div>
    );
}
