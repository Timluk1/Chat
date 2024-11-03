import styles from "./chatListItem.module.scss"

interface ChatListItemProps {
    urlImage: string,
    username: string,
    lastSeen: string,
    chatId: number
}

export function ChatListItem({ urlImage, username, lastSeen }: ChatListItemProps) {
    return (
        <div className={styles.chatListItem}>
            <img className={styles.chatListItem__image} src={urlImage} alt="" />
            <div>
                <h3 className={styles.chatListItem__title}>{username}</h3>
                <p className={styles.chatListItem__text}>{lastSeen}</p>
            </div>
        </div>
    );
}
