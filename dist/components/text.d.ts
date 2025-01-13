/**
 * Configurable typography utility for consistent text styling
 *
 * @param {object} options - Style configuration
 * @returns {string} Tailwind CSS classes
 *
 * @example
 * ```tsx
 * // Basic usage
 * <p className={text.root({ size: "lg" })}>
 *   Large text
 * </p>
 *
 * // Complex styling
 * <h1 className={text.root({
 *   size: "2xl",
 *   weight: "bold",
 *   tracking: "wide",
 *   align: "center"
 * })}>
 *   Heading Text
 * </h1>
 * ```
 *
 * Variants:
 * - size: xs | sm | base | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl
 * - align: left | center | right | justify | start | end
 * - strike: none | under | over | through
 * - weight: thin | extralight | light | normal | medium | semibold | bold | extrabold | black
 * - case: upper | lower | caps | normal
 * - wrap: wrap | nowrap | balance | pretty
 * - whitespace: normal | nowrap | pre | preline | prewrap | break
 * - leading: none | tight | snug | normal | relaxed | loose
 * - tracking: tighter | tight | normal | wide | wider | widest
 * - truncate: boolean
 * - dimmed: boolean
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
     * @example
     * ```tsx
     * // Basic paragraph
     * <p className={text.root()}>
     *   Default text
     * </p>
     *
     * // Styled heading
     * <h2 className={text.root({
     *   size: "xl",
     *   weight: "bold",
     *   leading: "tight"
     * })}>
     *   Bold Heading
     * </h2>
     *
     * // Truncated text
     * <p className={text.root({
     *   truncate: true,
     *   size: "sm",
     *   dimmed: true
     * })}>
     *   This is a very long text that will be truncated...
     * </p>
     * ```
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
        class?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | {
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
        className?: undefined;
    } | {
        class?: undefined;
        className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | {
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
