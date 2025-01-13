/**
 * Card - A flexible container component with header, body, and footer sections
 * supporting multiple styling variants and spacing options.
 *
 * @typedef {Object} CardRootProps
 * @property {boolean} [shadow] - Enables box shadow for elevation
 * @property {boolean} [border] - Shows border around card
 * @property {boolean} [rounded] - Applies medium border radius
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @typedef {Object} CardHeadProps
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows bottom border
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @typedef {Object} CardBodyProps
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @typedef {Object} CardFootProps
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows top border
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @example
 * ```tsx
 * // Basic card
 * <div className={card.root()}>
 *   <div className={card.body()}>
 *     Basic content
 *   </div>
 * </div>
 *
 * // Responsive card with all sections
 * <div className={card.root({
 *   shadow: true,
 *   rounded: true,
 *   space: {
 *     base: "sm",
 *     md: "md",
 *     lg: "lg"
 *   }
 * })}>
 *   <div className={card.head()}>
 *     <h3>Card Title</h3>
 *     <button>Close</button>
 *   </div>
 *   <div className={card.body()}>
 *     Card content goes here
 *   </div>
 *   <div className={card.foot()}>
 *     <button>Cancel</button>
 *     <button>Save</button>
 *   </div>
 * </div>
 *
 * // Common pattern: Simple content card
 * <div className={card.root({
 *   shadow: true,
 *   rounded: true
 * })}>
 *   <div className={card.body({ space: "md" })}>
 *     Content with padding
 *   </div>
 * </div>
 *
 * // Common pattern: Panel card
 * <div className={card.root({
 *   border: true,
 *   space: "sm"
 * })}>
 *   <div className={card.head({ border: true })}>
 *     Panel Header
 *   </div>
 *   <div className={card.body()}>
 *     Panel content
 *   </div>
 * </div>
 * ```
 *
 * @variant root
 * - shadow {boolean} - Enables box shadow for elevation
 * - border {boolean} - Shows border around card
 * - rounded {boolean} - Applies medium border radius
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 *
 * @variant head
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 * - border {boolean} - Shows bottom border
 *
 * @variant body
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 *
 * @variant foot
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 * - border {boolean} - Shows top border
 *
 * @default
 * - shadow: true
 * - border: true
 * - rounded: true
 * - space: "default"
 *
 * @interface CardRootVariants
 * @property {boolean} [shadow] - Enables box shadow for elevation
 * @property {boolean} [border] - Shows border around card
 * @property {boolean} [rounded] - Applies medium border radius
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 *
 * @interface CardHeadVariants
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows bottom border
 *
 * @interface CardBodyVariants
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 *
 * @interface CardFootVariants
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows top border
 *
 * @type {import('../styleshift').StyleshiftComponent<CardRootVariants> & {
 *   head: import('../styleshift').StyleshiftComponent<CardHeadVariants>,
 *   body: import('../styleshift').StyleshiftComponent<CardBodyVariants>,
 *   foot: import('../styleshift').StyleshiftComponent<CardFootVariants>
 * }}
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
     * @example
     * ```tsx
     * // Basic card
     * <div className={card.root()}>
     *   Basic card content
     * </div>
     *
     * // Styled card with all options
     * <div className={card.root({
     *   shadow: true,
     *   border: true,
     *   rounded: true,
     *   space: "lg"
     * })}>
     *   Custom styled card
     * </div>
     * ```
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    root: (props?: ({
        shadow?: boolean | undefined;
        border?: boolean | undefined;
        rounded?: boolean | undefined;
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
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
    /**
     * Card header with optional bottom border and spacing
     *
     * @example
     * ```tsx
     * // Basic header
     * <div className={card.head()}>
     *   <h3>Card Title</h3>
     *   <button>×</button>
     * </div>
     *
     * // Custom header with large spacing
     * <div className={card.head({
     *   space: "lg",
     *   border: false
     * })}>
     *   <h2>Large Header</h2>
     *   <div>Actions</div>
     * </div>
     * ```
     *
     * @returns {string} Tailwind classes
     */
    head: (props?: ({
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
        border?: boolean | undefined;
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
    /**
     * Card body with configurable padding
     *
     * @example
     * ```tsx
     * // Basic body
     * <div className={card.body()}>
     *   <p>Card content</p>
     * </div>
     *
     * // Body with custom spacing
     * <div className={card.body({ space: "md" })}>
     *   <div>Content with more padding</div>
     * </div>
     * ```
     *
     * @returns {string} Tailwind classes
     */
    body: (props?: ({
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
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
    /**
     * Card footer with optional top border and spacing
     *
     * @example
     * ```tsx
     * // Basic footer
     * <div className={card.foot()}>
     *   <button>Cancel</button>
     *   <button>Submit</button>
     * </div>
     *
     * // Custom footer with small spacing
     * <div className={card.foot({
     *   space: "sm",
     *   border: true
     * })}>
     *   <div>Status: Active</div>
     *   <button>Update</button>
     * </div>
     * ```
     *
     * @returns {string} Tailwind classes
     */
    foot: (props?: ({
        space?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | undefined;
        border?: boolean | undefined;
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
