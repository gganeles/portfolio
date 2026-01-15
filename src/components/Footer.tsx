import { personalInfo } from "~/lib/data";
import { createSignal } from "solid-js";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer class="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
            <div class="container max-w-4xl mx-auto px-6 md:px-4">
                <div
                    class="flex flex-col md:flex-row justify-between items-center trig-fade-up"
                    data-trig
                >
                    <p
                        class="text-sm text-muted-foreground text-center md:text-left transition-transform hover:scale-[1.01]"
                    >
                        &copy; {currentYear} {personalInfo.name}. All rights
                        reserved.
                    </p>
                    <p
                        class="text-sm text-muted-foreground mt-2 md:mt-0 text-center md:text-left transition-transform hover:scale-[1.01] trig-fade-in"
                        data-trig
                        style={{ "--trig-delay": "200ms" }}
                    >
                        Acknowledgement to Rishikesh S.
                    </p>
                </div>
            </div>
        </footer>
    );
}
