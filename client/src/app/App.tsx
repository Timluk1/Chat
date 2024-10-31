import styles from "./styles/App.module.scss";

interface AppProps {
    children: React.ReactNode;
}

function App({ children }: AppProps) {
    return <div className={styles.app}>{children}</div>;
}

export default App;
