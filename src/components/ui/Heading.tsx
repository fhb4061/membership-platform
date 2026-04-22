import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headerVariants = cva(
    "text-balance font-semibold leading-tight",
    {
        variants: {
            size: {
                1: "text-3xl md:text-5xl lg:text-3xl lg:leading-[1.05]",
                2: "text-xl md:text-3xl lg:text-2xl",
            }
        }
    }
);

type HeaderProps = {
    label: string;
    className?: string;
} & VariantProps<typeof headerVariants>

export function Header({ size = 1, label, className }: HeaderProps) {
    const Comp = size == 1 ? "h1" : "h2";

    return (
        <Comp className={cn(headerVariants({ size }), className)}>
            {label}
        </Comp>
    )
}