function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/* Exports
  ============================================ */ const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const defineConfig = (options)=>{
    const cx = function() {
        for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
            inputs[_key] = arguments[_key];
        }
        return clsx(inputs);
    };
    const cva = (config)=>(props)=>{
            var _config_compoundVariants;
            if ((config === null || config === undefined ? undefined : config.variants) == null) return cx(config === null || config === undefined ? undefined : config.base, props === null || props === undefined ? undefined : props.class, props === null || props === undefined ? undefined : props.className);
            const { variants, defaultVariants } = config;
            const getVariantClassNames = Object.keys(variants).map((variant)=>{
                const variantProp = props === null || props === undefined ? undefined : props[variant];
                const defaultVariantProp = defaultVariants === null || defaultVariants === undefined ? undefined : defaultVariants[variant];
                const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
                return variants[variant][variantKey];
            });
            const defaultsAndProps = {
                ...defaultVariants,
                // remove `undefined` props
                ...props && Object.entries(props).reduce((acc, param)=>{
                    let [key, value] = param;
                    return typeof value === "undefined" ? acc : {
                        ...acc,
                        [key]: value
                    };
                }, {})
            };
            const getCompoundVariantClassNames = config === null || config === undefined ? undefined : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === undefined ? undefined : _config_compoundVariants.reduce((acc, param)=>{
                let { class: cvClass, className: cvClassName, ...cvConfig } = param;
                return Object.entries(cvConfig).every((param)=>{
                    let [cvKey, cvSelector] = param;
                    const selector = defaultsAndProps[cvKey];
                    return Array.isArray(cvSelector) ? cvSelector.includes(selector) : selector === cvSelector;
                }) ? [
                    ...acc,
                    cvClass,
                    cvClassName
                ] : acc;
            }, []);
            return cx(config === null || config === undefined ? undefined : config.base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === undefined ? undefined : props.class, props === null || props === undefined ? undefined : props.className);
        };
    const compose = function() {
        for(var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++){
            components[_key] = arguments[_key];
        }
        return (props)=>{
            const propsWithoutClass = Object.fromEntries(Object.entries(props || {}).filter((param)=>{
                let [key] = param;
                return ![
                    "class",
                    "className"
                ].includes(key);
            }));
            return cx(components.map((component)=>component(propsWithoutClass)), props === null || props === undefined ? undefined : props.class, props === null || props === undefined ? undefined : props.className);
        };
    };
    return {
        compose,
        cva,
        cx
    };
};
const { compose, cva, cx } = defineConfig();

/**
 * Utility wrapper around class-variance-authority for type-safe className generation
 * @typedef {Object} StyleShift
 * @property {function} define - Creates variant-based className generators
 * @property {function} compose - Combines multiple variant definitions
 * @property {function} merge - Merges multiple className strings
 *
 * @example
 * const button = styleshift.define({
 *   base: "px-4 py-2 rounded",
 *   variants: {
 *     intent: {
 *       primary: "bg-blue-500 text-white",
 *       secondary: "bg-gray-200 text-gray-800"
 *     },
 *     size: {
 *       sm: "text-sm",
 *       lg: "text-lg"
 *     }
 *   }
 * });
 */
const styleshift = {
    define: cva,
    compose: compose,
    merge: cx,
};

/**
 * Base focus styles for interactive elements using Tailwind classes.
 * @variant base - Applies focus ring with offset and slate color
 */
const canFocus = styleshift.define({
    base: ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'],
});

/**
 * Applies standard disabled state styles to elements
 * @variant base - Reduces opacity, shows not-allowed cursor, and prevents pointer events
 */
const canDisable = styleshift.define({
    base: ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'],
});

/**
 * Configurable button component with surface and size variants.
 *
 * @type {import('../styleshift').StyleshiftComponent}
 *
 * @example
 * ```tsx
 * // Basic button
 * <button className={button.root()}>
 *   Click me
 * </button>
 *
 * // Large outline button with icon
 * <button className={button.root({ size: "lg", surface: "outline" })}>
 *   <Icon name="save" />
 *   Save Changes
 * </button>
 *
 * // Small ghost button
 * <button className={button.root({ size: "sm", surface: "ghost" })}>
 *   Cancel
 * </button>
 * ```
 *
 * @variant surface
 * - solid: White text on background with hover state
 * - outline: Border and text with hover state
 * - ghost: Transparent with hover background
 * - soft: Light background with darker text and hover state
 *
 * @variant size
 * - sm: Small
 * - base: Default
 * - md: Medium
 * - lg: Large
 *
 * @default
 * - surface: "solid"
 * - size: "base"
 */
const button = {
    root: styleshift.compose(canFocus, canDisable, styleshift.define({
        base: [
            'inline-flex',
            'items-center',
            'justify-center',
            'gap-2',
            'font-[500]',
            'rounded',
            'whitespace-nowrap',
            'transition-all',
            'border-2',
        ],
        variants: {
            surface: {
                solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
                outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
                ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
                soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
            },
            size: {
                sm: 'text-sm h-8 px-4',
                base: 'text-base h-10 px-4',
                md: 'text-md h-12 px-5',
                lg: 'text-lg h-14 px-5',
            },
        },
        defaultVariants: {
            surface: 'solid',
            size: 'base',
        },
    })),
};

/**
 * A flexible card component with customizable styling variants.
 *
 * @example
 * ```tsx
 * // Basic card with all sections
 * <div className={card.root()}>
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
 * // Custom styled card
 * <div className={card.root({
 *   shadow: true,
 *   rounded: true,
 *   space: "lg"
 * })}>
 *   <div className={card.body({ space: "md" })}>
 *     Simplified card with custom spacing
 *   </div>
 * </div>
 * ```
 *
 * @variant root
 * - shadow {boolean} - Enables box shadow
 * - border {boolean} - Shows border
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
 */
const card = {
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
    root: styleshift.define({
        base: ['transition-all border'],
        variants: {
            shadow: {
                true: 'shadow',
                false: '',
            },
            border: {
                true: 'border-slate-200',
                false: 'border-transparent',
            },
            rounded: {
                true: 'rounded-md',
                false: '',
            },
            space: {
                default: 'p-0',
                xs: 'p-1',
                sm: 'p-2',
                md: 'p-4',
                lg: 'p-8',
                xl: 'p-16',
            },
        },
        defaultVariants: {
            shadow: true,
            border: true,
            rounded: true,
            space: 'default',
        },
    }),
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
    head: styleshift.define({
        base: ['border-b flex justify-between items-center'],
        variants: {
            space: {
                default: '',
                xs: 'px-2 pt-1',
                sm: 'px-4 pt-2',
                md: 'px-8 pt-4',
                lg: 'px-16 pt-8',
                xl: 'px-24 pt-16',
            },
            border: {
                true: 'border-slate-200',
                false: 'border-transparent',
            },
        },
        defaultVariants: {
            space: 'sm',
            border: true,
        },
        compoundVariants: [
            {
                border: true,
                space: 'default',
                class: '',
            },
            {
                border: true,
                space: 'xs',
                class: 'pb-1',
            },
            {
                border: true,
                space: 'sm',
                class: 'pb-2',
            },
            {
                border: true,
                space: 'md',
                class: 'pb-4',
            },
            {
                border: true,
                space: 'lg',
                class: 'pb-8',
            },
            {
                border: true,
                space: 'xl',
                class: 'pb-16',
            },
        ],
    }),
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
    body: styleshift.define({
        base: [''],
        variants: {
            space: {
                default: '',
                xs: 'p-2',
                sm: 'p-4',
                md: 'p-8',
                lg: 'p-1',
                xl: 'p-2',
            },
        },
        defaultVariants: {
            space: 'sm',
        },
    }),
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
    foot: styleshift.define({
        base: ['border-t flex justify-between items-center'],
        variants: {
            space: {
                default: '',
                xs: 'px-2 pb-1',
                sm: 'px-4 pb-2',
                md: 'px-8 pb-4',
                lg: 'px-16 pb-8',
                xl: 'px-24 pb-16',
            },
            border: {
                true: 'border-slate-200',
                false: 'border-transparent',
            },
        },
        defaultVariants: {
            space: 'sm',
            border: true,
        },
        compoundVariants: [
            {
                border: true,
                space: 'default',
                class: '  ',
            },
            {
                border: true,
                space: 'xs',
                class: 'pt-1',
            },
            {
                border: true,
                space: 'sm',
                class: 'pt-2',
            },
            {
                border: true,
                space: 'md',
                class: 'pt-4',
            },
            {
                border: true,
                space: 'lg',
                class: 'pt-8',
            },
            {
                border: true,
                space: 'xl',
                class: 'pt-16',
            },
        ],
    }),
};

/**
 * Configurable link component with focus management and styling options
 *
 * @param {Object} options
 * @param {boolean} [options.underline=true] - Controls text decoration
 * @returns {string} Tailwind CSS class string
 *
 * @example
 * ```tsx
 * // Basic link
 * <a href="#" className={link.root()}>
 *   Learn more
 * </a>
 *
 * // Link without underline and icon
 * <a href="#" className={link.root({ underline: false })}>
 *   Documentation <Icon name="external-link" />
 * </a>
 * ```
 *
 * @variant underline
 * - true: Adds underline decoration
 * - false: Removes underline decoration
 */
const link = {
    /**
     * Root styles for the link component
     *
     * @property {Object} variants - Style variants configuration
     * @property {boolean} variants.underline - Controls text decoration
     *
     * @example
     * ```tsx
     * // Basic navigation link
     * <a href="/about" className={link.root()}>
     *   About us
     * </a>
     *
     * // Action link with icon
     * <a href="/settings" className={link.root({ underline: false })}>
     *   Settings <Icon name="gear" />
     * </a>
     * ```
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    root: styleshift.compose(canFocus, styleshift.define({
        base: [
            'text-blue-700',
            'hover:text-blue-800',
            'inline-flex',
            'items-center',
            'justify-center',
            'gap-2',
            'rounded',
            'transition-all',
        ],
        variants: {
            underline: {
                true: 'underline',
                false: 'no-underline',
            },
        },
        defaultVariants: {
            underline: true,
        },
    })),
};

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
const text = {
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
    root: styleshift.define({
        base: ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'],
        variants: {
            size: {
                default: '',
                xs: 'text-xs',
                sm: 'text-sm',
                base: 'text-base',
                md: 'text-md',
                lg: 'text-lg',
                xl: 'text-xl',
                '2xl': 'text-2xl',
                '3xl': 'text-3xl',
                '4xl': 'text-4xl',
                '5xl': 'text-5xl',
                '6xl': 'text-6xl',
            },
            align: {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right',
                justify: 'text-justify',
                start: 'text-start',
                end: 'text-end',
            },
            strike: {
                none: '',
                under: 'underline',
                over: 'overline',
                through: 'line-through',
            },
            weight: {
                default: '',
                thin: 'font-thin',
                extralight: 'font-extralight',
                light: 'font-light',
                normal: 'font-normal',
                medium: 'font-medium',
                semibold: 'font-semibold',
                bold: 'font-bold',
                extrabold: 'font-extrabold',
                black: 'font-black',
            },
            case: {
                default: '',
                upper: 'uppercase',
                lower: 'lowercase',
                caps: 'capitalize',
                normal: 'normal-case',
            },
            wrap: {
                default: '',
                wrap: 'text-wrap',
                nowrap: 'text-nowrap',
                balance: 'text-balance',
                pretty: 'text-pretty',
            },
            whitespace: {
                default: '',
                normal: 'whitespace-normal',
                nowrap: 'whitespace-nowrap',
                pre: 'whitespace-pre',
                preline: 'whitespace-pre-line',
                prewrap: 'whitespace-pre-wrap',
                break: 'whitespace-break-spaces',
            },
            leading: {
                default: '',
                none: 'leading-none',
                tight: 'leading-tight',
                snug: 'leading-snug',
                normal: 'leading-normal',
                relaxed: 'leading-relaxed',
                loose: 'leading-loose',
            },
            tracking: {
                default: '',
                tighter: 'tracking-tighter',
                tight: 'tracking-tight',
                normal: 'tracking-normal',
                wide: 'tracking-wide',
                wider: 'tracking-wider',
                widest: 'tracking-widest',
            },
            truncate: {
                true: ['truncate'],
                false: [''],
            },
            dimmed: {
                true: ['opacity-65'],
                false: ['opacity-100'],
            },
        },
        defaultVariants: {
            size: 'default',
            align: 'left',
            strike: 'none',
            weight: 'default',
            case: 'default',
            wrap: 'default',
            whitespace: 'default',
            leading: 'default',
            tracking: 'default',
            truncate: false,
            dimmed: false,
        },
    }),
};

/**
 * A separator component for visually dividing content.
 *
 * @type {import('../styleshift').StyleshiftComponent}
 *
 * @example
 * ```tsx
 * // Horizontal separator (default)
 * <div className={separator.root()} />
 *
 * // Vertical separator
 * <div className={separator.root({ orientation: "vertical" })} />
 * ```
 *
 * @variant orientation
 * - horizontal: Horizontal line (default)
 * - vertical: Vertical line
 *
 * @default
 * - orientation: "horizontal"
 */
const separator = {
    root: styleshift.define({
        base: ['shrink-0', 'border-0', 'transition-colors'],
        variants: {
            orientation: {
                horizontal: ['h-[1px]', 'w-full', 'bg-slate-200'],
                vertical: ['h-full', 'w-[1px]', 'bg-slate-200'],
            },
        },
        defaultVariants: {
            orientation: 'horizontal',
        },
    }),
};

export { button, card, link, separator, text };
