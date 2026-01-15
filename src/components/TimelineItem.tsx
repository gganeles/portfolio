import { type Component, type JSX, Show } from "solid-js";
import { cn } from "~/lib/utils";

interface TimelineItemProps {
    title: string;
    subtitle: string;
    date: string;
    isLast?: boolean;
    index?: number;
    children?: JSX.Element;
}

const TimelineItem: Component<TimelineItemProps> = (props) => {
    return (
        <div
            class="relative flex gap-6 trig-fade-up"
            data-trig
            style={{ "--trig-delay": `${(props.index || 0) * 100}ms` }}
        >
            <div class="flex flex-col items-center">
                <div
                    class="flex h-[18px] w-[18px] rounded-full border border-blue-500/50 bg-background dark:bg-muted z-10 trig-zoom-in"
                    data-trig
                    style={{ "--trig-delay": `${(props.index || 0) * 100}ms` }}
                />
                <Show when={!props.isLast}>
                    <div
                        class="w-px grow bg-gradient-to-b from-blue-500/50 to-cyan-500/30 dark:from-blue-500/30 dark:to-cyan-500/10 trig-fade-down"
                        data-trig
                    />
                </Show>
            </div>
            <div class={cn("pb-8", props.isLast ? "pb-0" : "")}>
                <div
                    class="flex flex-col gap-0.5 trig-fade-right"
                    data-trig
                    style={{ "--trig-delay": `${(props.index || 0) * 100 + 100}ms` }}
                >
                    <h3 class="font-medium">{props.title}</h3>
                    <p class="text-sm text-muted-foreground">{props.subtitle}</p>
                    <p class="text-xs text-muted-foreground/70 mb-2">{props.date}</p>
                </div>
                <div
                    class="trig-fade-in"
                    data-trig
                    style={{ "--trig-delay": `${(props.index || 0) * 100 + 200}ms` }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
