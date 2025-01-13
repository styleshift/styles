/**
 * Card component style configuration using Styleshift
 *
 * Provides a flexible card component with customizable borders, shadows, spacing,
 * and subcomponents (header, body, footer) for building consistent card layouts.
 *
 * @since 0.0.53
 *
 * @example
 * ```typescript
 * import { card } from '@styleshift/components';
 *
 * // Basic card with default variants
 * const cardClass = card.root({});
 *
 * // Customized card with header and footer
 * const classes = {
 *   root: card.root({ shadow: true, border: true, space: 'md' }),
 *   header: card.head({ space: 'sm', border: true }),
 *   body: card.body({ space: 'md' }),
 *   footer: card.foot({ space: 'sm', border: true })
 * };
 * ```
 */
export declare const card: {
    /**
     * Root card container styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {boolean} variants.shadow - Enables/disables card shadow
     * @property {boolean} variants.border - Controls border visibility
     * @property {boolean} variants.rounded - Controls border radius
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    root: (props?: ({
        shadow?: boolean | undefined;
        border?: boolean | undefined;
        rounded?: boolean | undefined;
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
    } & ({
        class?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
        className?: never;
    } | {
        class?: never;
        className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
    })) | undefined) => string;
    /**
     * Card header styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     * @property {boolean} variants.border - Controls bottom border visibility
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    head: (props?: ({
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
        border?: boolean | undefined;
    } & ({
        class?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
        className?: never;
    } | {
        class?: never;
        className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
    })) | undefined) => string;
    /**
     * Card body styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    body: (props?: ({
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
    } & ({
        class?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
        className?: never;
    } | {
        class?: never;
        className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
    })) | undefined) => string;
    /**
     * Card footer styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     * @property {boolean} variants.border - Controls top border visibility
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    foot: (props?: ({
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
        border?: boolean | undefined;
    } & ({
        class?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
        className?: never;
    } | {
        class?: never;
        className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined)[] | {
            [x: string]: any;
        } | null | undefined;
    })) | undefined) => string;
};
