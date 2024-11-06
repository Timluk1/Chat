import { Providers } from "./providers";
import styles from "./styles/App.module.scss";

interface AppProps {
    children: React.ReactNode;
}

function App({ children }: AppProps) {
    return (
        <Providers>
            <div className={styles.app}>
                {children}
            </div>
        </Providers>
    )
}

export default App;
