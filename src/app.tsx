import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import "./app.css";
// @ts-ignore
import "./trig.css";

import { trig } from "./lib/trig.wrapper";

export default function App() {
    onMount(() => {
        trig.trigInit();
    });

    return (
        <Router
            root={props => (
                <MetaProvider>
                    <script
                        innerHTML={`
                            (function() {
                                const getThemePreference = () => {
                                    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
                                        return localStorage.getItem("theme");
                                    }
                                    return window.matchMedia("(prefers-color-scheme: dark)").matches
                                        ? "dark"
                                        : "light";
                                };
                                const isDark = getThemePreference() === "dark";
                                document.documentElement.classList[isDark ? "add" : "remove"]("dark");

                                if (typeof localStorage !== "undefined") {
                                    const observer = new MutationObserver(() => {
                                        const isDark = document.documentElement.classList.contains("dark");
                                        localStorage.setItem("theme", isDark ? "dark" : "light");
                                    });
                                    observer.observe(document.documentElement, {
                                        attributes: true,
                                        attributeFilter: ["class"],
                                    });
                                }
                            })();
                        `}
                    />
                    <Title>Gabriel Ganeles - Portfolio</Title>
                    <div class="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(80,110,136,0.3),rgba(255,255,255,0))]" />
                    <Suspense>{props.children}</Suspense>
                </MetaProvider>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
