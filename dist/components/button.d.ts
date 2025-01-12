import { type VariantProps } from 'class-variance-authority';
/**
 * Button component styles
 * @param {ButtonVariants} props
 * @returns {string}
 */
export declare const button: (props?: ({
    readonly surface?: "solid" | "outline" | "ghost" | "soft" | null | undefined;
    readonly size?: "md" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof button>;
