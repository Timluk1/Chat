import React, { ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    children: ReactNode
    type: "submit" | "reset" | "button" | undefined,
    onClick?: (event: React.MouseEvent) => void
}

export function Button({ children, onClick, type }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
}
