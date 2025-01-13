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

const styleshift = {
    define: cva,
    compose: compose,
    merge: cx,
};

const canFocus = styleshift.define({
    base: ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'],
});

const canDisable = styleshift.define({
    base: ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'],
});

/**
 * Button component style configuration using Styleshift
 *
 * Provides a comprehensive set of styles and variants for button components,
 * including different surfaces, sizes, and states (focus, disabled).
 *
 * @since 0.0.53
 *
 * @example
 * ```typescript
 * import { button } from '@styleshift/components';
 *
 * // Basic usage
 * const className = button.root({ surface: 'solid', size: 'md' });
 *
 * // With focus and disabled states
 * const className = button.root({
 *   surface: 'outline',
 *   size: 'base',
 *   isFocused: true,
 *   isDisabled: false
 * });
 * ```
 *
 * @see {@link canFocus} for focus state handling
 * @see {@link canDisable} for disabled state handling
 */
const button = {
    /**
     * Root styles for the button component
     * Composes focus and disable states with core button styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('solid'|'outline'|'ghost'|'soft')} variants.surface - Button appearance variant
     * @property {('sm'|'base'|'md'|'lg')} variants.size - Button size variant
     * @property {boolean} [isFocused] - Focus state from canFocus
     * @property {boolean} [isDisabled] - Disabled state from canDisable
     *
     * @returns {string} Combined Tailwind CSS classes
     */
    root: styleshift.compose(canFocus, canDisable, styleshift.define({
        /**
         * Base styles applied to all button variants
         */
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
        /**
         * Style variants for different button appearances
         */
        variants: {
            /**
             * Surface variants define the button's visual style
             * - solid: Filled background with white text
             * - outline: Bordered button with transparent background
             * - ghost: Text-only button with hover background
             * - soft: Light background with dark text
             */
            surface: {
                solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
                outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
                ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
                soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
            },
            /**
             * Size variants define the button's dimensions and text size
             */
            size: {
                sm: 'text-sm h-8 px-4',
                base: 'text-base h-10 px-4',
                md: 'text-md h-12 px-5',
                lg: 'text-lg h-14 px-5',
            },
        },
        /**
         * Default variant values if none are specified
         */
        defaultVariants: {
            surface: 'solid',
            size: 'base',
        },
    })),
};

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
     * Card header styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     * @property {boolean} variants.border - Controls bottom border visibility
     *
     * @returns {string} Combined Tailwind CSS classes
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
     * Card body styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     *
     * @returns {string} Combined Tailwind CSS classes
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
     * Card footer styles
     *
     * @property {Object} variants - Style variants configuration
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
     * @property {boolean} variants.border - Controls top border visibility
     *
     * @returns {string} Combined Tailwind CSS classes
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
 * Link component style configuration using Styleshift
 *
 * Provides styles for interactive link elements with focus states and
 * customizable text decoration. Combines focus management with link-specific styling.
 *
 * @since 0.0.53
 *
 * @example
 * ```typescript
 * import { link } from '@styleshift/components';
 *
 * // Basic link with underline
 * const className = link.root({ underline: true });
 *
 * // Link with focus state and no underline
 * const className = link.root({
 *   underline: false,
 *   isFocused: true
 * });
 * ```
 *
 * @see {@link canFocus} for focus state handling
 */
const link = {
    /**
     * Root styles for the link component
     *
     * @property {Object} variants - Style variants configuration
     * @property {boolean} variants.underline - Controls text decoration
     * @property {boolean} [isFocused] - Focus state from canFocus
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

export { button, card, link, text };
