import { Box, List, styled } from "@mui/material";
import { ListItemButton } from "@mui/material";

export const ChatContainer = styled(Box)({
    width: "800px",
    overflowY: "auto",
    padding: "0px 20px 0px 20px",
    top: 0,
    "&::-webkit-scrollbar": {
        width: "8px",
        height: "2px",
        backgroundColor: "black",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "white",
        borderRadius: "4px"
    }
});

export const ChatEntryButton = styled(ListItemButton)(({ theme }) => ({
    position: "sticky",
    background: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[200],
    padding: theme.spacing(1.5),
    zIndex: 1,
    top: 0,
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));
