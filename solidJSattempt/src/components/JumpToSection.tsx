import MotionWrapper from "./MotionWrapper";
import { For } from "solid-js";

export default function JumpToSection() {
    const sections = ["projects", "experience", "skills", "awards", "education"];

    return (
        <div class="md:hidden">
            <div class="p-6 flex flex-col items-center">
                <MotionWrapper>
                    <div
                        class="p-4 flex bg-opacity-0 flex-col md:w-104 gap-2"
                    >
                        <h3
                            class="text-lg
                        font-semibold mb-2
                        text-center
                        text-secondary-foreground"
                        >
                            Jump to Section
                        </h3>
                        <div>
                            <div
                                class="flex flex-col gap-2 items-center trig-fade-in"
                                data-trig
                            >
                                <For each={sections}>
                                    {(el, i) => {
                                        const scrollToSection = (e: MouseEvent) => {
                                            e.preventDefault();
                                            const element = document.getElementById(el);
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                                window.history.pushState(null, "", `#${el}`);
                                            }
                                        };
                                        return (
                                            <a
                                                href={`#${el}`}
                                                onClick={scrollToSection}
                                                class="w-60 sm:w-96 transition-all px-4 py-2 rounded-full bg-muted/80 text-muted-foreground hover:bg-blue-500/10 hover:text-blue-500 font-medium text-center border border-blue-500/10 shadow-sm hover:scale-102 hover:-translate-y-0.5 active:scale-95 trig-fade-up"
                                                data-trig
                                                style={{ "--trig-delay": `${i() * 100}ms` }}
                                            >
                                                {el.charAt(0).toUpperCase() + el.slice(1)}
                                            </a>
                                        );
                                    }}
                                </For>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
}
