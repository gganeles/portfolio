import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function ProjectVideo(props: {
    src: string;
    poster: string;
    i?: number;
    title?: string;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isBig, setIsBig] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [aspectRatio, setAspectRatio] = useState<number>(16 / 9);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (videoRef.current && !isBig) {
            videoRef.current.playbackRate = 3.0;
        }
    }, [videoRef, isBig]);

    const layoutId = `video-${props.src}`;

    const transition = {
        type: "spring",
        damping: 30,
        stiffness: 300
    };

    return (
        <div
            className={`relative w-full h-full ${props.i === 0 ? "flex-12" : "flex-11"} `}
        >
            <div className="absolute w-full h-full blur-xs bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"></div>
            <div className="relative w-full h-full p-[2pt]">
                <div className="w-full h-full rounded-sm overflow-hidden">
                    {!isBig && (
                        <motion.div
                            layoutId={layoutId}
                            transition={transition}
                            onClick={() => setIsBig(true)}
                            className="w-full h-full cursor-pointer relative"
                        >
                            <video
                                ref={videoRef}
                                src={props.src}
                                controls={false}
                                loop
                                muted
                                autoPlay
                                playsInline
                                poster={props.poster}
                                className="w-full h-full object-cover block"
                                onLoadedMetadata={(e) => {
                                    setAspectRatio(e.currentTarget.videoWidth / e.currentTarget.videoHeight);
                                }}>
                                <source src={props.src} />
                                {props.src === "/videos/set2.mkv" && (
                                    <source src="/videos/set2.webm" />
                                )}
                            </video>
                            {props.title && (
                                <div className="absolute bottom-2 left-2 pointer-events-none">
                                    <div className="bg-blue-400/90 text-[var(--background)] px-2 py-1 rounded text-xs font-semibold shadow-sm backdrop-blur-sm border border-blue-300/20">
                                        {props.title}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {isBig && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsBig(false)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />

                            <div
                                className="relative z-10 flex items-center justify-center p-2 isolate w-full h-full pointer-events-none"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.div
                                    layoutId={layoutId}
                                    transition={transition}
                                    className="rounded-lg shadow-2xl overflow-hidden relative pointer-events-auto"
                                    style={{
                                        width: `min(80vw, calc(80vh * ${aspectRatio}))`,
                                        height: `min(80vh, calc(80vw / ${aspectRatio}))`,
                                    }}
                                >
                                    <video
                                        controls
                                        autoPlay
                                        playsInline
                                        muted
                                        className="w-full h-full block"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    >
                                        <source src={props.src} />
                                        {props.src === "/videos/set2.mkv" && (
                                            <source src="/videos/set2.webm" />
                                        )}
                                    </video>
                                </motion.div>
                                <button
                                    onClick={() => setIsBig(false)}
                                    className="absolute -top-12 right-0 p-2 bg-transparent transition-colors"
                                    aria-label="Close video"
                                ></button>
                            </div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
