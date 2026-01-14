import { skills } from "~/lib/data";
import MotionWrapper from "./MotionWrapper";
import SkillCard from "./ui/skill";
import { For, type Component } from "solid-js";


const SkillsSection: Component = () => {
    return (
        <section
            id="skills"
            class="py-12 bg-gradient-to-b from-background to-muted/20"
        >
            <div class="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">
                        Skills
                    </h2>
                </MotionWrapper>

                <div class="space-y-6">
                    <For each={skills}>
                        {(category, index) => (
                            <div
                                class="trig-fade-up"
                                data-trig
                                style={{ "--trig-delay": `${index() * 100}ms` }}
                            >
                                <SkillCard
                                    skillName={category.category}
                                    skills={category.skills}
                                />
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
