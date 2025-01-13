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
 * Button component style configuration
 * @description Defines the styling variants and composition for the button component
 */
const button = {
    /**
     * Root styles for the button component
     * Composes focus and disable states with core button styles
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
 * Card component styling configuration using CVA (Class Variance Authority)
 * Provides consistent styling for card components with customizable variants
 */
const card = {
    /**
     * Root card container styles
     * @property {boolean} shadow - Enables/disables card shadow
     * @property {boolean} border - Controls border visibility
     * @property {boolean} rounded - Controls border radius
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} space - Controls padding size
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
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} space - Controls padding size
     * @property {boolean} border - Controls bottom border visibility
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
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} space - Controls padding size
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
     * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} space - Controls padding size
     * @property {boolean} border - Controls top border visibility
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
 * Link component styling configuration using CVA (Class Variance Authority)
 * Combines focus styles with customizable link appearance
 */
const link = {
    /**
     * Root styles for the link component
     * Composed of focus management and base link styles
     * @property {Object} variants - Available style variants
     * @property {Object} variants.underline - Controls text decoration
     * @property {boolean} defaultVariants.underline - Default is underlined (true)
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
 * The `text` object provides a set of utility classes for styling text elements.
 * It uses the `cva` function to create a variant-based styling system.
 */
const text = {
    /**
     * The root style configuration for text elements.
     * It includes base styles and various variants for customization.
     */
    root: styleshift.define({
        base: ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'],
        variants: {
            /**
             * Size variants for text elements.
             * Options range from 'xs' to '6xl'.
             */
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
            /**
             * Alignment variants for text elements.
             * Options include 'left', 'center', 'right', 'justify', 'start', and 'end'.
             */
            align: {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right',
                justify: 'text-justify',
                start: 'text-start',
                end: 'text-end',
            },
            /**
             * Text decoration variants.
             * Options include 'none', 'under', 'over', and 'through'.
             */
            strike: {
                none: '',
                under: 'underline',
                over: 'overline',
                through: 'line-through',
            },
            /**
             * Font weight variants.
             * Options range from 'thin' to 'black'.
             */
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
            /**
             * Text case variants.
             * Options include 'upper', 'lower', 'caps', and 'normal'.
             */
            case: {
                default: '',
                upper: 'uppercase',
                lower: 'lowercase',
                caps: 'capitalize',
                normal: 'normal-case',
            },
            /**
             * Text wrapping variants.
             * Options include 'wrap', 'nowrap', 'balance', and 'pretty'.
             */
            wrap: {
                default: '',
                wrap: 'text-wrap',
                nowrap: 'text-nowrap',
                balance: 'text-balance',
                pretty: 'text-pretty',
            },
            /**
             * Whitespace handling variants.
             * Options include 'normal', 'nowrap', 'pre', 'preline', 'prewrap', and 'break'.
             */
            whitespace: {
                default: '',
                normal: 'whitespace-normal',
                nowrap: 'whitespace-nowrap',
                pre: 'whitespace-pre',
                preline: 'whitespace-pre-line',
                prewrap: 'whitespace-pre-wrap',
                break: 'whitespace-break-spaces',
            },
            /**
             * Line height variants.
             * Options include 'none', 'tight', 'snug', 'normal', 'relaxed', and 'loose'.
             */
            leading: {
                default: '',
                none: 'leading-none',
                tight: 'leading-tight',
                snug: 'leading-snug',
                normal: 'leading-normal',
                relaxed: 'leading-relaxed',
                loose: 'leading-loose',
            },
            /**
             * Letter spacing variants.
             * Options include 'tighter', 'tight', 'normal', 'wide', 'wider', and 'widest'.
             */
            tracking: {
                default: '',
                tighter: 'tracking-tighter',
                tight: 'tracking-tight',
                normal: 'tracking-normal',
                wide: 'tracking-wide',
                wider: 'tracking-wider',
                widest: 'tracking-widest',
            },
            /**
             * Truncation option for text elements.
             * Boolean value to enable or disable text truncation.
             */
            truncate: {
                true: ['truncate'],
                false: [''],
            },
            /**
             * Dimmed option for text elements.
             * Boolean value to apply dimmed opacity.
             */
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
