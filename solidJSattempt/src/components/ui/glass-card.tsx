import { type Component, splitProps, type JSX } from "solid-js";
import { cn } from "~/lib/utils";
interface GlassCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
    hoverShadow?: boolean;
    children?: JSX.Element;
}

const GlassCard: Component<GlassCardProps> = (props) => {
    const [local, rest] = splitProps(props, ["class", "hoverEffect", "hoverShadow", "children"]);

    // Default values
    const hoverEffect = local.hoverEffect ?? true;
    const hoverShadow = local.hoverShadow ?? true;

    return (
        <div
            class={cn(
                "rounded-lg border border-border/50 bg-background/80 backdrop-blur-md backdrop-filter shadow-sm dark:bg-card/30 dark:backdrop-blur-md",
                hoverShadow && "hover:shadow-md",
                hoverEffect && "hover:-translate-y-1",
                "transition-all duration-300 ease-in-out",
                local.class
            )}
            {...rest}
        >
            {local.children}
        </div>
    );
};

export { GlassCard };
