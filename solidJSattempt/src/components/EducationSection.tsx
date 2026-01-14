import { education } from "~/lib/data";
import TimelineItem from "./TimelineItem";
import { Award, MapPin } from "lucide-solid";
import MotionWrapper from "./MotionWrapper";
import { For, Show } from "solid-js";

export default function EducationSection() {
    return (
        <section
            id="education"
            class="py-12 bg-gradient-to-b from-muted/10 to-background"
        >
            <div class="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">
                        Education
                    </h2>
                </MotionWrapper>

                <div class="mb-8">
                    <For each={education}>
                        {(edu, index) => (
                            <TimelineItem
                                title={`${edu.degree}`}
                                subtitle={`${edu.institution}`}
                                date={`${edu.period}`}
                                isLast={index() === education.length - 1}
                                index={index()}
                            >

                                <div class="text-sm text-muted-foreground mb-3 flex flex-row items-center">
                                    <MapPin height={14} width={14} class="mr-1" /> <div> {edu.location} </div>
                                </div>

                                <Show when={edu.achievements && edu.achievements.length > 0}>
                                    <div
                                        class="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm trig-fade-up"
                                        data-trig
                                        style={{ "--trig-delay": "200ms" }}
                                    >
                                        <div class="flex items-center mb-3">
                                            <div class="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                                                <Award class="h-4 w-4 text-purple-500" />
                                            </div>
                                            <h4 class="text-sm font-medium">
                                                ✨ Achievements & Activities
                                            </h4>
                                        </div>
                                        <ul class="list-none ml-4 space-y-2 text-sm">
                                            <For each={edu.achievements}>
                                                {(achievement, i) => (
                                                    <li
                                                        class="text-muted-foreground relative pl-6 trig-fade-left"
                                                        data-trig
                                                        style={{ "--trig-delay": `${i() * 100}ms` }}
                                                    >
                                                        {achievement}
                                                    </li>
                                                )}
                                            </For>
                                        </ul>
                                    </div>
                                </Show>
                            </TimelineItem>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}
