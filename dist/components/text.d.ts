/**
 * Text - A comprehensive typography component with extensive styling options
 * for consistent text formatting across the application.
 *
 * @typedef {Object} TextProps
 * @property {('default'|'xs'|'sm'|'base'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl')} [size] - Text size scale
 * @property {('left'|'center'|'right'|'justify'|'start'|'end')} [align] - Text alignment
 * @property {('none'|'under'|'over'|'through')} [strike] - Text decoration style
 * @property {('default'|'thin'|'extralight'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black')} [weight] - Font weight
 * @property {('default'|'upper'|'lower'|'caps'|'normal')} [case] - Text transform
 * @property {('default'|'wrap'|'nowrap'|'balance'|'pretty')} [wrap] - Text wrapping behavior
 * @property {('default'|'normal'|'nowrap'|'pre'|'preline'|'prewrap'|'break')} [whitespace] - Whitespace handling
 * @property {('default'|'none'|'tight'|'snug'|'normal'|'relaxed'|'loose')} [leading] - Line height
 * @property {('default'|'tighter'|'tight'|'normal'|'wide'|'wider'|'widest')} [tracking] - Letter spacing
 * @property {boolean} [truncate] - Enable text truncation
 * @property {boolean} [dimmed] - Apply reduced opacity
 * @property {React.HTMLAttributes<HTMLElement>} [props] - HTML element props
 *
 * @example
 * ```tsx
 * // Basic text
 * <p className={text.root()}>
 *   Default paragraph text
 * </p>
 *
 * // Responsive heading
 * <h1 className={text.root({
 *   size: {
 *     base: "xl",
 *     md: "2xl",
 *     lg: "4xl"
 *   },
 *   weight: "bold",
 *   tracking: "tight"
 * })}>
 *   Responsive Heading
 * </h1>
 *
 * // Common pattern: Article text
 * <article className={text.root({
 *   size: "lg",
 *   leading: "relaxed"
 * })}>
 *   Long-form content with comfortable reading
 * </article>
 *
 * // Common pattern: Meta text
 * <span className={text.root({
 *   size: "sm",
 *   dimmed: true,
 *   weight: "medium"
 * })}>
 *   Posted 2 days ago
 * </span>
 * ```
 *
 * @variant size
 * - xs | sm | base | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl {'size'} - Text size scale
 *
 * @variant align
 * - left | center | right | justify | start | end {'align'} - Text alignment
 *
 * @variant strike
 * - none | under | over | through {'strike'} - Text decoration style
 *
 * @variant weight
 * - thin | extralight | light | normal | medium | semibold | bold | extrabold | black {'weight'} - Font weight
 *
 * @variant case
 * - upper | lower | caps | normal {'case'} - Text transform
 *
 * @variant wrap
 * - wrap | nowrap | balance | pretty {'wrap'} - Text wrapping behavior
 *
 * @variant whitespace
 * - normal | nowrap | pre | preline | prewrap | break {'whitespace'} - Whitespace handling
 *
 * @variant leading
 * - none | tight | snug | normal | relaxed | loose {'leading'} - Line height
 *
 * @variant tracking
 * - tighter | tight | normal | wide | wider | widest {'tracking'} - Letter spacing
 *
 * @variant truncate
 * - true | false {boolean} - Enable text truncation
 *
 * @variant dimmed
 * - true | false {boolean} - Apply reduced opacity
 *
 * @default
 * - size: "default"
 * - align: "left"
 * - strike: "none"
 * - weight: "default"
 * - case: "default"
 * - wrap: "default"
 * - whitespace: "default"
 * - leading: "default"
 * - tracking: "default"
 * - truncate: false
 * - dimmed: false
 *
 * @interface TextVariants
 * @property {('default'|'xs'|'sm'|'base'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl')} [size] - Text size scale
 * @property {('left'|'center'|'right'|'justify'|'start'|'end')} [align] - Text alignment
 * @property {('none'|'under'|'over'|'through')} [strike] - Text decoration style
 * @property {('default'|'thin'|'extralight'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black')} [weight] - Font weight
 * @property {('default'|'upper'|'lower'|'caps'|'normal')} [case] - Text transform
 * @property {('default'|'wrap'|'nowrap'|'balance'|'pretty')} [wrap] - Text wrapping behavior
 * @property {('default'|'normal'|'nowrap'|'pre'|'preline'|'prewrap'|'break')} [whitespace] - Whitespace handling
 * @property {('default'|'none'|'tight'|'snug'|'normal'|'relaxed'|'loose')} [leading] - Line height
 * @property {('default'|'tighter'|'tight'|'normal'|'wide'|'wider'|'widest')} [tracking] - Letter spacing
 * @property {boolean} [truncate] - Enable text truncation
 * @property {boolean} [dimmed] - Apply reduced opacity
 *
 * @type {import('../styleshift').StyleshiftComponent<TextVariants>}
 */
export declare const text: {
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
