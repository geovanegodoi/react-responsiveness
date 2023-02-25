import React from "react";

interface CardProps {
    title: string;
    duration: string;
    thumb: string;
    video_id: string;
}

export default function Card({ title, duration, thumb, video_id }: CardProps) {
    return (
        <div className="card" id={video_id}>
            <div className="image">
                <img src={thumb} />
            </div>
            <div className="content">
                <p className="title text--medium">{title}</p>
                <div className="info">
                    <p className="text--medium">{duration}</p>
                    <p className="price text--medium">Free</p>
                </div>
            </div>
        </div>
    );
}
