import * as classVarianceAuthority from 'class-variance-authority';
/**
 * Shared styles
 */
export declare const focus: string[];
export declare const disabled: string[];
/**
 * Helpers
 */
export declare const cva: <T>(base?: import("class-variance-authority/dist/types").ClassValue, config?: T extends {
    [x: string]: Record<string, import("clsx").ClassValue>;
} ? {
    variants?: T | undefined;
    defaultVariants?: { [Variant in keyof T]?: import("class-variance-authority/dist/types").StringToBoolean<keyof T[Variant]> | null | undefined; } | undefined;
    compoundVariants?: (T extends {
        [x: string]: Record<string, import("clsx").ClassValue>;
    } ? ({ [Variant in keyof T]?: import("class-variance-authority/dist/types").StringToBoolean<keyof T[Variant]> | null | undefined; } | { [Variant_1 in keyof T]?: import("class-variance-authority/dist/types").StringToBoolean<keyof T[Variant_1]> | import("class-variance-authority/dist/types").StringToBoolean<keyof T[Variant_1]>[] | undefined; }) & import("class-variance-authority/dist/types").ClassProp : import("class-variance-authority/dist/types").ClassProp)[] | undefined;
} : never) => (props?: T extends {
    [x: string]: Record<string, import("clsx").ClassValue>;
} ? { [Variant in keyof T]?: import("class-variance-authority/dist/types").StringToBoolean<keyof T[Variant]> | null | undefined; } & import("class-variance-authority/dist/types").ClassProp : import("class-variance-authority/dist/types").ClassProp) => string;
export declare const cx: typeof import("clsx").clsx;
export type VariantProps<T extends (...args: any) => any> = classVarianceAuthority.VariantProps<T>;
