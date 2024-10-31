import { ReactNode } from "react"
import styles from "./authContainer.module.scss"

interface LoginContainerProps {
    children: ReactNode
}

export function AuthContainer({ children }: LoginContainerProps) {
  return (
    <div className={styles.authContainer}>
        {children}
    </div>
  )
}
