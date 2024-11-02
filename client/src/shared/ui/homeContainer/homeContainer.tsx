import { ReactNode } from "react";
import styles from "./homeContainer.module.scss"

interface HomeContainerProps {
    children: ReactNode
}

export function HomeContainer({ children }: HomeContainerProps) {
    return <div className={styles.homeContainer}>{children}</div>;
}
