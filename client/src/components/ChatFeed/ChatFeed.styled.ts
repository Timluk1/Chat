import { Box, Typography, styled } from "@mui/material";

export const ChatFeedContainer = styled(Box)(({ theme }) => ({
    top: 0,
    width: "30%",
    padding: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.divider}`,
}));

export const ChatFeedTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.text.primary,
}));