import React from "react";
import { videos } from "../videos";
import Card from "./Card";

export default function CardList() {
    console.log(videos);

    return (
        <main>
            <section className="cards">
                {videos.map((item) => (
                    <Card
                        key={item.video_id}
                        duration={item.duration}
                        thumb={item.thumb}
                        title={item.title}
                        video_id={item.video_id}
                    />
                ))}
            </section>
        </main>
    );
}
