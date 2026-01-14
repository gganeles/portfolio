import { personalInfo } from "~/lib/data";
import { Mail, Github, MapPin } from "lucide-solid";
import { FaBrandsWhatsapp, FaBrandsLinkedinIn } from "solid-icons/fa";
import MotionWrapper from "./MotionWrapper";
import AnimatedIcon from "./ui/DownloadButton";
import { type Component, type JSX, For } from "solid-js";

interface HeroSectionProps {
    children: JSX.Element;
}

const HeroSection: Component<HeroSectionProps> = (props) => {
    return (
        <section class="py-16 md:pt-24 md:pb-16 relative overflow-hidden">
            <div class="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
                <div
                    class="flex flex-col md:flex-row md:items-center justify-between mb-8 trig-fade-in"
                    data-trig
                >
                    <div class="text-center md:text-left">
                        <h1
                            class="text-4xl font-bold mb-2 trig-fade-right"
                            data-trig

                        >
                            {personalInfo.name}{" "}
                        </h1>

                        <div class="text-xl text-muted-foreground mb-6">
                            <For each={personalInfo.currentRoles}>
                                {(role) => (
                                    <div
                                        class="trig-fade-right"
                                        data-trig
                                        style={{ "--trig-delay": "100ms" }}
                                    >{role}</div>
                                )}
                            </For>
                        </div>

                        <div
                            class="flex flex-col gap-2 items-center md:items-start "

                        >
                            <div class="flex items-center gap-2 trig-fade-right transition-all duration-500 ease-in-out"
                                data-trig
                                style={{ "--trig-delay": "300ms" }} >
                                <div
                                    class="flex items-center text-sm text-muted-foreground hover:scale-105 hover:text-gray-600 transition-all cursor-default"
                                >
                                    <MapPin class="h-4 w-4 mr-2" />
                                    {personalInfo.location}
                                </div>
                            </div>

                            <div class="flex items-center gap-2 trig-fade-right transition-all duration-500 ease-in-out"
                                data-trig
                                style={{ "--trig-delay": "400ms" }}>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    class="flex items-center text-sm text-muted-foreground hover:text-foreground hover:scale-105 transition-all"
                                >
                                    <Mail class="h-4 w-4 mr-2" />
                                    {personalInfo.email}
                                </a>
                            </div>

                            <div class="flex items-center gap-2 trig-fade-right transition-all duration-500 ease-in-out"
                                data-trig
                                style={{ "--trig-delay": "500ms" }}>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center text-sm text-muted-foreground hover:text-foreground hover:scale-105 transition-all"
                                >
                                    <Github class="h-4 w-4 mr-2" />
                                    GitHub
                                </a>
                            </div>

                            <div class="flex items-center gap-2 trig-fade-right transition-all duration-500 ease-in-out"
                                data-trig
                                style={{ "--trig-delay": "600ms" }}>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center text-sm text-muted-foreground hover:text-foreground hover:scale-105 transition-all"
                                >
                                    <FaBrandsLinkedinIn class="h-4 w-4 mr-2" />
                                    LinkedIn
                                </a>
                            </div>

                            <div class="flex items-center gap-2 trig-fade-right transition-all duration-500 ease-in-out"
                                data-trig
                                style={{ "--trig-delay": "700ms" }}>
                                <a
                                    href={personalInfo.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center text-sm text-muted-foreground hover:text-foreground hover:scale-105 transition-all"
                                >
                                    <FaBrandsWhatsapp class="h-4 w-4 mr-2" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 md:mt-0 flex justify-center trig-fade-up"
                        data-trig
                        style={{ "--trig-delay": "300ms" }}
                    >
                        <div class="relative hover:scale-105 active:scale-95 transition-all duration-200">
                            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
                            <div class="w-48 md:w-60 rounded-full relative ring-2 ring-blue-500/50 overflow-clip">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>

                <MotionWrapper>
                    <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
                        <p class="text-muted-foreground pl-4 py-2 mb-4 relative">
                            <span class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                            {personalInfo.heroDescription}
                        </p>
                    </div>
                </MotionWrapper>

                <div class="pt-10 flex justify-center">
                    <div
                        class="trig-fade-up"
                        data-trig
                        style={{ "--trig-delay": "400ms" }}
                    >
                        <div
                            class="items-center cursor-pointer hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
                            onClick={() => {
                                var link = document.createElement("a");
                                link.download = "GabrielGanelesCV.pdf";
                                link.href = "CV.pdf";
                                link.click();
                                link.remove();
                            }}
                            aria-label="Download CV"
                        >
                            <button
                                id="cvBtn"
                                class="svg relative cursor-pointer inline-flex items-center justify-center px-16 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-md group hover:text-white bg-gradient-to-l from-cyan-500 to-blue-500"
                            >
                                <span class="relative pr-2">Download CV</span>
                                <AnimatedIcon width={30} height={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
