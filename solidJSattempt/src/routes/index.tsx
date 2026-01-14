import { createSignal, onMount, lazy } from "solid-js";
import GlassHeader from "~/components/GlassHeader";
import HeroSection from "~/components/HeroSection";

const JumpToSection = lazy(() => import("~/components/JumpToSection"));
const ProjectsSection = lazy(() => import("~/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("~/components/ExperienceSection"));
const SkillsSection = lazy(() => import("~/components/SkillsSection"));
const AwardsSection = lazy(() => import("~/components/AwardsSection"));
const EducationSection = lazy(() => import("~/components/EducationSection"));
const Footer = lazy(() => import("~/components/Footer"));

export default function Home() {
    return (
        <div class="min-h-screen bg-background text-foreground">
            <GlassHeader />
            <main class="min-h-screen">
                <HeroSection>
                    <img
                        src="/profile.webp"
                        alt="profile Picture"
                        class="object-cover w-full h-full"
                    />
                </HeroSection>
                <JumpToSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <AwardsSection />
                <EducationSection />
            </main>
            <Footer />
        </div>
    );
}
