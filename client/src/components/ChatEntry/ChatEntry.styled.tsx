import { Avatar, ListItemButton, styled } from "@mui/material";

export const ChatEntryButton = styled(ListItemButton)(({ theme }) => ({
    padding: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const ChantEntryAvatar = styled(Avatar)({
    width: "55px",
    height: "55px",
    marginRight: "20px"
});