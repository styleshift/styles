import { type VariantProps } from 'class-variance-authority';
export declare const button: {
    root: (props?: ({
        surface?: "solid" | "outline" | "ghost" | "soft" | null | undefined;
        size?: "base" | "sm" | "md" | "lg" | null | undefined;
        isDisabled?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export type ButtonRootVariants = VariantProps<typeof button.root>;
