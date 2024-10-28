import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "@mui/material";
import AppRouter from "./components/AppRouter/AppRouter";

// Создание темной темы
const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

// Определение глобальных стилей
const globalStyles = (
    <GlobalStyles
        styles={{
            "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
            },
            "body": {
                width: "100%",
                height: "100%"
            },
            "html": {
                width: "100%",
                height: "100%"
            },
            "#root": {
                width: "100%",
                height: "100%",
                padding: "0px 10px 0px 10px"
            }
        }}
    />
);

function App() {
//    const token = useAppSelector((state) => state.auth.accessToken);
//    const socket = io("http://localhost:3000", {
//        auth: {
//            token
//        },
//    }
//    );

//    socket.on("connect", () => {
//        console.log("Connected")
//    })


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {globalStyles}
            <div className="app" style={{display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
                {/* <Login /> */}
                <AppRouter />

            </div>
        </ThemeProvider>
    );
}

export default App;
