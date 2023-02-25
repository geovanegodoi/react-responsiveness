import { Box } from "@mui/material";
import React from "react";

interface CardProps {
    title: string;
    duration: string;
    thumb: string;
    video_id: string;
}

export default function Card({ title, duration, thumb, video_id }: CardProps) {
    return (
        <Box className="card" id={video_id}>
            <Box className="image">
                <img src={thumb} />
            </Box>
            <Box className="content">
                <p className="title text--medium">{title}</p>
                <Box className="info">
                    <p className="text--medium">{duration}</p>
                    <p className="price text--medium">Free</p>
                </Box>
            </Box>
        </Box>
    );
}
