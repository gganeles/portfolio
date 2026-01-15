import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "~/lib/data";
import { createSignal, Show, For } from "solid-js";
import { Menu, X } from "lucide-solid";

export default function GlassHeader() {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen());

    const sectionList = ["projects", "experience", "skills", "awards", "education"];

    const scrollToSection = (e: MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `#${id}`);
        }
    };

    return (
        <header class="sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
            <div class="container max-w-4xl mx-auto p-4 flex justify-between items-center">
                <a
                    class="flex items-center text-lg font-medium hover:scale-105 active:scale-95 transition-transform duration-200"
                    href="/"
                >
                    <img
                        src={"/Logo.webp"}
                        alt={personalInfo.name}
                        width={40}
                        height={40}
                        loading="eager"
                        class="py-2 pl-1 pr-[11px]"
                    />
                    {personalInfo.name}
                </a>

                {/* Desktop Navigation */}
                <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <For each={sectionList}>
                        {(item, index) => (
                            <a
                                href={`#${item}`}
                                onClick={(e) => scrollToSection(e, item)}
                                class="transition-all hover:text-foreground/80 text-foreground/60 hover:-translate-y-0.5"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        )}
                    </For>
                </nav>

                <div class="flex items-center space-x-2">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        class="md:hidden p-2 text-foreground active:scale-90 transition-transform duration-200"
                        aria-label="Toggle menu"
                    >
                        <Show when={isMenuOpen()} fallback={<Menu size={24} />}>
                            <X size={24} />
                        </Show>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                class={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40 ${isMenuOpen() ? 'max-h-64 opacity-100 py-4 px-4' : 'max-h-0 opacity-0'}`}
            >
                <nav class="flex flex-col space-y-4 text-sm font-medium">
                    <For each={sectionList}>
                        {(item, index) => (
                            <a
                                href={`#${item}`}
                                onClick={(e) => scrollToSection(e, item)}
                                class="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        )}
                    </For>
                </nav>
            </div>
        </header>
    );
}
