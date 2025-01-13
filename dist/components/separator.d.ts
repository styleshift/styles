/**
 * Separator - A flexible divider component for visually separating content
 * with support for horizontal and vertical orientations.
 *
 * @typedef {Object} SeparatorProps
 * @property {('horizontal'|'vertical')} [orientation] - Controls the separator's orientation
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @example
 * ```tsx
 * // Basic horizontal separator
 * <div className={separator.root()} />
 *
 * // Vertical separator for layout
 * <div className={separator.root({
 *   orientation: "vertical"
 * })} />
 *
 * // Common pattern: Content divider
 * <section>
 *   <h2>Section 1</h2>
 *   <div className={separator.root()} />
 *   <p>Content below</p>
 * </section>
 *
 * // Common pattern: Vertical divider in flex layout
 * <div className="flex h-8">
 *   <span>Left</span>
 *   <div className={separator.root({ orientation: "vertical" })} />
 *   <span>Right</span>
 * </div>
 * ```
 *
 * @variant orientation
 * - horizontal {'horizontal'} - Creates a horizontal dividing line (default)
 * - vertical {'vertical'} - Creates a vertical dividing line
 *
 * @default
 * - orientation: "horizontal"
 *
 * @interface SeparatorVariants
 * @property {('horizontal'|'vertical')} [orientation] - Controls the separator's orientation
 *
 * @type {import('../styleshift').StyleshiftComponent<SeparatorVariants>}
 */
export declare const separator: {
    root: (props?: ({
        orientation?: "horizontal" | "vertical" | undefined;
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
