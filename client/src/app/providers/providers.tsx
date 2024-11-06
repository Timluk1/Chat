import { Provider } from "react-redux"
import { store } from "app/store"

interface IProvidersProps {
    children: React.ReactNode
}

export function Providers({ children }: IProvidersProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
  }
  