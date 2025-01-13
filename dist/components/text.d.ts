import { type VariantProps } from 'class-variance-authority';
export declare const text: {
    root: (props?: ({
        size?: "default" | "base" | "sm" | "md" | "lg" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export type TextRootVariants = VariantProps<typeof text.root>;
