import { workExperience } from "~/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-solid";
import MotionWrapper from "./MotionWrapper";
import { For } from "solid-js";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            class="py-12 bg-gradient-to-b to-muted/20 from-background"
        >
            <div class="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 class="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
                        <span
                            class="inline-block mr-2 lg:group-hover:rotate-12 transition-transform duration-500"
                        >
                            <Briefcase class="h-6 w-6" />
                        </span>{" "}
                        Experience
                    </h2>
                </MotionWrapper>
                <div class="mb-8">
                    <For each={workExperience}>
                        {(job, index) => (
                            <TimelineItem
                                title={`${job.position} | ${job.company}`}
                                subtitle={`${job.location}`}
                                date={`${job.period}`}
                                isLast={index() === workExperience.length - 1}
                                index={index()}
                            >
                                <div
                                    class="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-blue-500/20 dark:bg-card/10 dark:border-blue-500/10 shadow-sm trig-fade-up"
                                    data-trig
                                    style={{ "--trig-offset": "100px" }}
                                >
                                    <ul class="list-disc ml-4 space-y-2 text-sm">
                                        <For each={job.achievements}>
                                            {(achievement, index0) => (
                                                <li
                                                    class="text-muted-foreground relative pl-6 trig-fade-right"
                                                    data-trig
                                                    style={{ "--trig-delay": `${(index0() || 0) * 100 + 100}ms` }}
                                                >
                                                    {achievement}
                                                </li>
                                            )}
                                        </For>
                                    </ul>
                                </div>
                            </TimelineItem>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}
