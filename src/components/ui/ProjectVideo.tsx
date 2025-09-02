import { video } from "framer-motion/client";
import { useEffect, useRef } from "react";

export default function ProjectVideo(props: { src: string, poster: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current!.playbackRate = 3.0;
    }, [videoRef]);

    return (
        <div className="relative w-full h-full">
            <video
            ref={videoRef}
            controls={false}
            loop
            muted
            autoPlay={true}
            preload="none"
            poster={props.poster}
            aria-label="project video"
            style={{
                objectFit: "cover",
                display: "block",
                width: "100%",
                height: "100%",
            }}
            >
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    );
}
