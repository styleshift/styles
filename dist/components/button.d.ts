import { type VariantProps } from 'class-variance-authority';
export declare const button: (props?: ({
    surface?: "solid" | "outline" | "ghost" | "soft" | null | undefined;
    size?: "md" | "sm" | "lg" | null | undefined;
    isDisabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof button>;
