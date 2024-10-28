import { Container, styled } from "@mui/material";
import ChatFeed from "../components/ChatFeed/ChatFeed";

// Стилизация контейнера чата
const HomeContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    position: "relative",
}));


function Home() {
    return (
        <HomeContainer>
            <ChatFeed />
        </HomeContainer>
    );
}

export default Home;
