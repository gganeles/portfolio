import { createSignal, onMount, Show, type Component } from "solid-js";
import { Portal } from "solid-js/web";

interface ProjectVideoProps {
    src: string | string[];
    poster: string;
    i?: number;
    title?: string;
}

const ProjectVideo: Component<ProjectVideoProps> = (props) => {
    let videoRef: HTMLVideoElement | undefined;
    const [isBig, setIsBig] = createSignal(false);
    const [aspectRatio, setAspectRatio] = createSignal(16 / 9);

    // Handle array src (take first or specific index)
    const videoSrc = () => Array.isArray(props.src) ? props.src[0] : props.src;

    const [isVisible, setIsVisible] = createSignal(false);
    let containerRef: HTMLDivElement | undefined;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        }, { rootMargin: "200px" });

        if (containerRef) {
            observer.observe(containerRef);
        }

        if (videoRef && !isBig()) {
            videoRef.playbackRate = 3.0;
        }
    });

    const toggleBig = () => setIsBig(!isBig());

    return (
        <div
            ref={containerRef}
            class={`relative w-full h-full ${props.i === 0 ? "flex-12" : "flex-11"} `}
        >
            <div class="absolute w-full h-full blur-xs bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"></div>
            <div class="relative w-full h-full p-[2pt]">
                <div class="w-full h-full rounded-sm overflow-hidden">
                    <Show when={!isBig()}>
                        <div
                            onClick={toggleBig}
                            class="w-full h-full cursor-pointer relative"
                        >
                            <Show when={isVisible()}>
                                <video
                                    ref={videoRef}
                                    src={videoSrc()}
                                    controls={false}
                                    loop
                                    muted
                                    autoplay
                                    playsinline
                                    poster={props.poster}
                                    class="w-full h-full object-cover block"
                                    preload="none"
                                    onLoadedMetadata={(e) => {
                                        setAspectRatio(e.currentTarget.videoWidth / e.currentTarget.videoHeight);
                                    }}
                                >
                                    <source src={videoSrc()} />
                                </video>
                            </Show>
                            <Show when={props.title}>
                                <div class="absolute bottom-2 left-2 pointer-events-none">
                                    <div class="bg-blue-400/90 text-[var(--background)] px-2 py-1 rounded text-xs font-semibold shadow-sm backdrop-blur-sm border border-blue-300/20">
                                        {props.title}
                                    </div>
                                </div>
                            </Show>
                        </div>
                    </Show>
                </div>
            </div>

            <Show when={isBig()}>
                <Portal>
                    <div class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                        <div
                            class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out"
                            style={{ opacity: isBig() ? 1 : 0 }}
                            onClick={() => setIsBig(false)}
                        />

                        <div
                            class="relative z-10 flex items-center justify-center p-2 isolate w-full h-full pointer-events-none transition-all duration-300 ease-out"
                            style={{
                                opacity: isBig() ? 1 : 0,
                                transform: isBig() ? 'scale(1)' : 'scale(0.95)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                class="rounded-lg shadow-2xl overflow-hidden relative pointer-events-auto"
                                style={{
                                    width: `min(80vw, calc(80vh * ${aspectRatio()}))`,
                                    height: `min(80vh, calc(80vw / ${aspectRatio()}))`,
                                }}
                            >
                                <video
                                    controls
                                    autoplay
                                    playsinline
                                    muted
                                    class="w-full h-full block"
                                    style={{
                                        "object-fit": "cover",
                                    }}
                                >
                                    <source src={videoSrc()} />
                                </video>
                            </div>
                            <button
                                onClick={() => setIsBig(false)}
                                class="absolute -top-12 right-0 p-2 bg-transparent transition-colors text-white"
                                aria-label="Close video"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Portal>
            </Show>
        </div>
    );
};

export default ProjectVideo;
