import { type VariantProps } from '../shared';
export declare const text: {
    root: (props?: ({
        size?: "default" | "base" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | null | undefined;
        align?: "left" | "center" | "right" | "justify" | "start" | "end" | null | undefined;
        strike?: "none" | "under" | "over" | "through" | null | undefined;
        weight?: "default" | "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black" | null | undefined;
        case?: "default" | "normal" | "upper" | "lower" | "caps" | null | undefined;
        wrap?: "default" | "wrap" | "nowrap" | "balance" | "pretty" | null | undefined;
        whitespace?: "default" | "normal" | "nowrap" | "pre" | "preline" | "prewrap" | "break" | null | undefined;
        leading?: "default" | "none" | "normal" | "tight" | "snug" | "relaxed" | "loose" | null | undefined;
        tracking?: "default" | "normal" | "tight" | "tighter" | "wide" | "wider" | "widest" | null | undefined;
        truncate?: boolean | null | undefined;
        dimmed?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export type TextRootVariants = VariantProps<typeof text.root>;
