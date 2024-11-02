import React, { ReactNode } from "react"
import styles from "./button.module.scss"

interface ButtonProps {
    children: ReactNode
    onClick: (event: React.MouseEvent) => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
  )
}
