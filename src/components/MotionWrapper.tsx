import { type Component, type JSX, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

interface MotionWrapperProps extends JSX.HTMLAttributes<HTMLDivElement> {
    delay?: number;
}

const MotionWrapper: Component<MotionWrapperProps> = (props) => {
    const [local, rest] = splitProps(props, ["class", "children", "delay"]);

    return (
        <div
            class={cn(local.class, "trig-fade-up")}
            data-trig
            style={{ "--trig-delay": `${local.delay || 0}ms` }}
            {...rest}
        >
            {local.children}
        </div>
    );
};

export default MotionWrapper;
