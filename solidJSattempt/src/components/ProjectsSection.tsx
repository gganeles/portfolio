import { projects } from "~/lib/data";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github, Link } from "lucide-solid";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import ProjectVideo from "./ui/ProjectVideo";
import { For, Show } from "solid-js";


export default function ProjectsSection() {
    return (
        <section
            id="projects"
            class="py-12 relative bg-gradient-to-b to-muted/20 from-background"
        >
            <div class="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">
                        Projects
                    </h2>
                </MotionWrapper>

                <div class="flex flex-col gap-6">
                    <For each={projects}>
                        {(project, index) => (
                            <MotionWrapper delay={index() * 0.2}>
                                <GlassCard
                                    class="group overflow-hidden dark:border-blue-500/10 h-full flex flex-col sm:flex-row"
                                    hoverEffect={false}
                                >
                                    <div class="flex flex-col w-full">
                                        <CardHeader class="bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
                                            <CardTitle class="text-center md:text-left transition-colors duration-300">
                                                {project.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <Show when={!project.smallVid && Array.isArray(project.video)}>
                                            <div class="flex flex-col sm:flex-row gap-2 md:gap-7 px-2 sm:px-8 pt-6">
                                                <For each={project.video as string[]}>
                                                    {(source, i) => (
                                                        <ProjectVideo
                                                            src={source}
                                                            poster={project.poster}
                                                            i={i()}
                                                            title={project.videoTitles?.[i()]}
                                                        />
                                                    )}
                                                </For>
                                            </div>
                                        </Show>

                                        <CardContent class="flex flex-grow max-sm:items-center flex-col sm:flex-row">
                                            <Show when={Array.isArray(project.description)}>
                                                <ul class="list-disc ml-4 space-y-1 text-sm pt-3 transition-all duration-300">
                                                    <For each={project.description as unknown as string[]}>
                                                        {(desc, i) => (
                                                            <li
                                                                class="text-muted-foreground trig-fade-left"
                                                                data-trig
                                                                style={{ "--trig-delay": `${i() * 100}ms` }}
                                                            >
                                                                {desc}
                                                            </li>
                                                        )}
                                                    </For>
                                                </ul>
                                            </Show>

                                            <Show when={typeof project.description === "string"}>
                                                <div
                                                    class="text-muted-foreground flex-1 text-md p-6 transition-all duration-300"
                                                >
                                                    <For each={(project.description as string).split("\n")}>
                                                        {(text, index) => (
                                                            <div class="pb-3 trig-fade-left" data-trig style={{ "--trig-delay": `${index() * 300}ms` }}>{text}</div>
                                                        )}
                                                    </For>
                                                </div>
                                            </Show>

                                            <Show when={project.smallVid}>
                                                <div class="w-full flex-1 flex justify-center items-center py-1 px-1 sm:pr-1 max-w-80">
                                                    <div class="w-full">
                                                        <ProjectVideo
                                                            src={project.video}
                                                            poster={project.poster}
                                                        />
                                                    </div>
                                                </div>
                                            </Show>
                                        </CardContent>
                                        <CardFooter class="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
                                            <For each={project.try}>
                                                {(link, i) => (
                                                    <a
                                                        class="flex items-center text-sm text-muted-foreground cursor-pointer hover:text-blue-500 transition-all duration-300 group/link py-3 sm:py-1 hover:scale-105 active:scale-95"
                                                        href={link}
                                                    >
                                                        <div>{project.tryTitles?.[i()] || "Try It Yourself"}</div> <Link class="p-1" />
                                                    </a>
                                                )}
                                            </For>
                                            <Show when={project.github}>
                                                <a
                                                    class="flex items-center text-sm text-muted-foreground cursor-pointer hover:text-blue-500 transition-all duration-300 group/link py-3 sm:py-1 hover:scale-105 active:scale-95"
                                                    href={project.github}
                                                >
                                                    <div>View on GitHub</div> <Github class="p-1" />
                                                </a>
                                            </Show>
                                        </CardFooter>
                                    </div>
                                </GlassCard>
                            </MotionWrapper>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}
