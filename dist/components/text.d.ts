import { type VariantProps } from '../shared';
export declare const text: {
    root: (props?: ({
        size?: "default" | "base" | "sm" | "md" | "lg" | null | undefined;
        align?: "left" | "center" | "right" | "justify" | "start" | "end" | null | undefined;
        strike?: "none" | "under" | "over" | "through" | null | undefined;
        weight?: "default" | "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black" | null | undefined;
        case?: "default" | "normal" | "upper" | "lower" | "caps" | null | undefined;
        truncate?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export type TextRootVariants = VariantProps<typeof text.root>;
