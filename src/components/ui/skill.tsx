import { GlassCard } from "./glass-card";
import { For } from "solid-js";


function SkillTag(props: { skill: string, delay: number }) {
    return (
        <div
            class="trig-zoom-in"
            data-trig
            style={{ "--trig-duration": "200ms", "--trig-delay": `${props.delay}ms` }}
        >
            <div class="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">
                {props.skill}
            </div>
        </div>
    );
}

export default function SkillCard(props: { skillName: string; skills: string[] }) {
    return (
        <GlassCard class="p-4">
            <h3 class="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {props.skillName}
            </h3>

            <div
                class="flex flex-wrap gap-2 justify-center md:justify-start"
            >
                <For each={props.skills}>
                    {(skill, index) => (
                        <SkillTag skill={skill} delay={index() * 50} />
                    )}
                </For>
            </div>
        </GlassCard>
    );
}
