import { Sidebar } from "widgets/sidebar";
import { MainChat } from "widgets/mainChat";
import { HomeContainer } from "shared/ui/homeContainer";

export function Home() {
    return (
        <> 
            <HomeContainer> 
                <Sidebar />
                <MainChat />
            </HomeContainer>
        </>
    );
}
