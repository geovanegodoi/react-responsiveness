import { Box, styled, SxProps, Theme, useTheme } from "@mui/material";
import React from "react";

export default function ColoredBox() {
    return <StyledBox></StyledBox>;
}

const StyledBox = styled(Box)(({ theme }) => ({
    width: 300,
    height: 300,
    [theme.breakpoints.up("xs")]: {
        backgroundColor: "lightgray",
        width: 100,
        height: 100,
    } as SxProps,
    [theme.breakpoints.up("sm")]: {
        backgroundColor: "gray",
        width: 100,
        height: 100,
    } as SxProps,
    [theme.breakpoints.up("md")]: {
        backgroundColor: "yellow",
        width: 200,
        height: 200,
    } as SxProps,
    [theme.breakpoints.up("lg")]: {
        backgroundColor: "green",
        width: 400,
        height: 400,
    } as SxProps,
    [theme.breakpoints.up("xl")]: {
        backgroundColor: "blue",
        width: 800,
        height: 800,
    } as SxProps,
}));
