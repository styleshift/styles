import { type VariantProps } from 'class-variance-authority';
export declare const link: {
    root: (props?: ({
        size?: "md" | "sm" | "lg" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export type LinkRootVariants = VariantProps<typeof link.root>;
