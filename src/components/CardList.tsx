import React from "react";
import { Grid, SxProps } from "@mui/material";
import { videos } from "../videos";
import Card from "./Card";

export default function CardList() {
    const styles: SxProps = {
        gridTemplateColumns: {
            xs: "300px",
            sm: "600px",
            md: "300px 300px",
            lg: "300px 300px 300px",
        },
    };

    return (
        <main>
            <Grid className="cards" sx={styles}>
                {videos.map((item) => (
                    <Card
                        key={item.video_id}
                        duration={item.duration}
                        thumb={item.thumb}
                        title={item.title}
                        video_id={item.video_id}
                    />
                ))}
            </Grid>
        </main>
    );
}
