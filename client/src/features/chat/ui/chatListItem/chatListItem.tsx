import WomanImg from "assets/images/woman.png"
import styles from "./chatListItem.module.scss"

export function ChatListItem() {
    return (
        <div className={styles.chatListItem}>
            <img className={styles.chatListItem__image} src={WomanImg} alt="" />
            <div>
                <h3 className={styles.chatListItem__title}>Athalia Putri</h3>
                <p className={styles.chatListItem__text}>Last seen yesterday</p>
            </div>
        </div>
    );
}
