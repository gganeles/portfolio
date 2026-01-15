import { awards } from "~/lib/data";
import { Trophy } from "lucide-solid";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { For } from "solid-js";

export default function AwardsSection() {
    return (
        <section
            id="awards"
            class="py-12 bg-gradient-to-b from-background to-muted/10"
        >
            <div class="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">
                        Awards
                    </h2>
                </MotionWrapper>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <For each={awards}>
                        {(award, index) => (
                            <MotionWrapper delay={index() * 0.1}>
                                <GlassCard class="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                                    <div class="flex items-center mb-2">
                                        <div
                                            class="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2 transition-transform duration-300 hover:rotate-12"
                                        >
                                            <Trophy class="h-4 w-4 text-white" />
                                        </div>
                                        <h3 class="font-medium">{award.name}</h3>
                                    </div>
                                    <p class="text-xs text-muted-foreground mb-1 pl-8">
                                        {award.issuer}
                                    </p>
                                    <p class="text-sm text-muted-foreground p-2 flex-grow">
                                        {award.desc}
                                    </p>
                                    <div class="flex flex-col space-y-2 mt-auto">
                                        <div class="flex pt-4 justify-between items-center">
                                            <span class="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md">
                                                {award.date}
                                            </span>
                                            <span
                                                class="text-xs px-2 py-1 bg-purple-500/10 rounded-full transition-transform duration-300 hover:scale-105 inline-block"
                                            >
                                                {award.position}
                                            </span>
                                        </div>
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
