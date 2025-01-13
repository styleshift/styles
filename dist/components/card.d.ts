import { type VariantProps } from '../shared';
export declare const card: {
    root: (props?: ({
        shadow?: boolean | null | undefined;
        border?: boolean | null | undefined;
        rounded?: boolean | null | undefined;
        space?: "default" | "sm" | "md" | "lg" | "xs" | "xl" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    head: (props?: ({
        space?: "default" | "sm" | "md" | "lg" | "xs" | "xl" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    body: (props?: ({
        space?: "default" | "sm" | "md" | "lg" | "xs" | "xl" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    foot: (props?: ({
        space?: "default" | "sm" | "md" | "lg" | "xs" | "xl" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export type CardRootVariants = VariantProps<typeof card.root>;
export type CardHeadVariants = VariantProps<typeof card.head>;
export type CardBodyVariants = VariantProps<typeof card.body>;
export type CardFootVariants = VariantProps<typeof card.foot>;
