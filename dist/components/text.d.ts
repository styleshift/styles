/**
 * Text component style configuration using Styleshift
 *
 * Provides a comprehensive set of typography utilities for styling text elements,
 * including size, alignment, decoration, weight, case, wrapping, whitespace,
 * line height, letter spacing, and more.
 *
 * @since 0.0.53
 *
 * @example
 * ```typescript
 * import { text } from '@styleshift/components';
 *
 * // Basic text styling
 * const className = text.root({
 *   size: 'lg',
 *   weight: 'bold'
 * });
 *
 * // Complex text formatting
 * const className = text.root({
 *   size: '2xl',
 *   align: 'center',
 *   weight: 'semibold',
 *   tracking: 'wide',
 *   leading: 'relaxed',
 *   truncate: true
 * });
 * ```
 */
export declare const text: {
    /**
     * Root styles for text elements with extensive customization options
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'base'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl')} variants.size - Text size
     * @property {('left'|'center'|'right'|'justify'|'start'|'end')} variants.align - Text alignment
     * @property {('none'|'under'|'over'|'through')} variants.strike - Text decoration
     * @property {('default'|'thin'|'extralight'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black')} variants.weight - Font weight
     * @property {('default'|'upper'|'lower'|'caps'|'normal')} variants.case - Text transform
     * @property {('default'|'wrap'|'nowrap'|'balance'|'pretty')} variants.wrap - Text wrapping
     * @property {('default'|'normal'|'nowrap'|'pre'|'preline'|'prewrap'|'break')} variants.whitespace - Whitespace handling
     * @property {('default'|'none'|'tight'|'snug'|'normal'|'relaxed'|'loose')} variants.leading - Line height
     * @property {('default'|'tighter'|'tight'|'normal'|'wide'|'wider'|'widest')} variants.tracking - Letter spacing
     * @property {boolean} variants.truncate - Enable text truncation
     * @property {boolean} variants.dimmed - Apply reduced opacity
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    root: (props?: ({
        size?: "sm" | "base" | "md" | "lg" | "default" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | undefined;
        align?: "left" | "center" | "right" | "justify" | "start" | "end" | undefined;
        strike?: "none" | "under" | "over" | "through" | undefined;
        weight?: "default" | "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black" | undefined;
        case?: "default" | "normal" | "upper" | "lower" | "caps" | undefined;
        wrap?: "default" | "wrap" | "nowrap" | "balance" | "pretty" | undefined;
        whitespace?: "default" | "normal" | "nowrap" | "pre" | "preline" | "prewrap" | "break" | undefined;
        leading?: "default" | "none" | "normal" | "tight" | "snug" | "relaxed" | "loose" | undefined;
        tracking?: "default" | "normal" | "tight" | "tighter" | "wide" | "wider" | "widest" | undefined;
        truncate?: boolean | undefined;
        dimmed?: boolean | undefined;
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
