import { Moon, Sun } from "lucide-solid";
import { Button } from "./button";
import { createSignal, onMount, Show } from "solid-js";

export default function ThemeToggle() {
    const [theme, setTheme] = createSignal<"light" | "dark">("light");

    onMount(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    });

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains("dark");
        const newTheme = isDark ? "light" : "dark";

        document.documentElement.classList.toggle("dark");
        setTheme(newTheme);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            class="rounded-full cursor-pointer"
        >
            <Show when={theme() === "light"} fallback={<Sun class="h-5 w-5" />}>
                <Moon class="h-5 w-5" />
            </Show>
            <span class="sr-only">Toggle theme</span>
        </Button>
    );
}
