function r(e) {
  var t,
    f,
    n = '';
  if ('string' == typeof e || 'number' == typeof e) n += e;
  else if ('object' == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
    } else for (f in e) e[f] && (n && (n += ' '), (n += f));
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
  return n;
}

/* Exports
  ============================================ */ const falsyToString = (value) =>
  typeof value === 'boolean' ? `${value}` : value === 0 ? '0' : value;
const defineConfig = (options) => {
  const cx = function () {
    for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }
    return clsx(inputs);
  };
  const cva = (config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === undefined ? undefined : config.variants) == null)
      return cx(
        config === null || config === undefined ? undefined : config.base,
        props === null || props === undefined ? undefined : props.class,
        props === null || props === undefined ? undefined : props.className,
      );
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === undefined ? undefined : props[variant];
      const defaultVariantProp =
        defaultVariants === null || defaultVariants === undefined ? undefined : defaultVariants[variant];
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const defaultsAndProps = {
      ...defaultVariants,
      // remove `undefined` props
      ...(props &&
        Object.entries(props).reduce((acc, param) => {
          let [key, value] = param;
          return typeof value === 'undefined'
            ? acc
            : {
                ...acc,
                [key]: value,
              };
        }, {})),
    };
    const getCompoundVariantClassNames =
      config === null || config === undefined
        ? undefined
        : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === undefined
          ? undefined
          : _config_compoundVariants.reduce((acc, param) => {
              let { class: cvClass, className: cvClassName, ...cvConfig } = param;
              return Object.entries(cvConfig).every((param) => {
                let [cvKey, cvSelector] = param;
                const selector = defaultsAndProps[cvKey];
                return Array.isArray(cvSelector) ? cvSelector.includes(selector) : selector === cvSelector;
              })
                ? [...acc, cvClass, cvClassName]
                : acc;
            }, []);
    return cx(
      config === null || config === undefined ? undefined : config.base,
      getVariantClassNames,
      getCompoundVariantClassNames,
      props === null || props === undefined ? undefined : props.class,
      props === null || props === undefined ? undefined : props.className,
    );
  };
  const compose = function () {
    for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
      components[_key] = arguments[_key];
    }
    return (props) => {
      const propsWithoutClass = Object.fromEntries(
        Object.entries(props || {}).filter((param) => {
          let [key] = param;
          return !['class', 'className'].includes(key);
        }),
      );
      return cx(
        components.map((component) => component(propsWithoutClass)),
        props === null || props === undefined ? undefined : props.class,
        props === null || props === undefined ? undefined : props.className,
      );
    };
  };
  return {
    compose,
    cva,
    cx,
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
 * Button - A flexible button component supporting multiple surfaces and sizes
 * with built-in focus and disabled states.
 *
 * @typedef {Object} ButtonProps
 * @property {('solid' | 'outline' | 'ghost' | 'soft')} [surface] - Button surface style
 * @property {('sm' | 'base' | 'md' | 'lg')} [size] - Button size variant
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - HTML button element props
 *
 * @example
 * ```tsx
 * // Basic button
 * <button className={button.root()}>
 *   Click me
 * </button>
 *
 * // Responsive button that changes size
 * <button className={button.root({
 *   size: {
 *     base: "sm",
 *     md: "base",
 *     lg: "lg"
 *   }
 * })}>
 *   Responsive Button
 * </button>
 *
 * // Common pattern: Primary action button
 * <button className={button.root({
 *   surface: "solid",
 *   size: "lg"
 * })}>
 *   Save Changes
 * </button>
 *
 * // Common pattern: Secondary action button
 * <button className={button.root({
 *   surface: "outline",
 *   size: "base"
 * })}>
 *   Cancel
 * </button>
 *
 * // Common pattern: Subtle action button
 * <button className={button.root({
 *   surface: "ghost",
 *   size: "sm"
 * })}>
 *   Learn More
 * </button>
 * ```
 *
 * @variant surface
 * - solid {'solid'} - High emphasis button with solid background
 * - outline {'outline'} - Medium emphasis button with border
 * - ghost {'ghost'} - Low emphasis button with hover effect
 * - soft {'soft'} - Subtle button with light background
 *
 * @variant size
 * - sm {'sm'} - Compact size (h-8, text-sm)
 * - base {'base'} - Default size (h-10, text-base)
 * - md {'md'} - Medium size (h-12, text-md)
 * - lg {'lg'} - Large size (h-14, text-lg)
 *
 * @default
 * - surface: "solid"
 * - size: "base"
 *
 * @see canFocus - Adds focus ring styles
 * @see canDisable - Handles disabled state styles
 *
 * @interface ButtonVariants
 * @property {('solid' | 'outline' | 'ghost' | 'soft')} [surface] - Button surface style
 * @property {('sm' | 'base' | 'md' | 'lg')} [size] - Button size variant
 *
 * @type {import('../styleshift').StyleshiftComponent<ButtonVariants>}
 */
const button = {
  /**
   * Root styles for the button component
   *
   * @property {Object} variants - Style variants configuration
   * @property {('solid' | 'outline' | 'ghost' | 'soft')} variants.surface - Button surface style
   * @property {('sm' | 'base' | 'md' | 'lg')} variants.size - Button size variant
   *
   * @returns {string} Combined Tailwind CSS classes
   */
  root: styleshift.compose(
    canFocus,
    canDisable,
    styleshift.define({
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
    }),
  ),
};

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
 * Link - A flexible link component with focus management and styling options
 * for creating accessible and interactive navigation elements.
 *
 * @typedef {Object} LinkProps
 * @property {boolean} [underline] - Controls text decoration
 * @property {React.HTMLAttributes<HTMLAnchorElement>} [props] - HTML anchor element props
 *
 * @example
 * ```tsx
 * // Basic link
 * <a href="#" className={link.root()}>
 *   Learn more
 * </a>
 *
 * // Responsive link with icon
 * <a href="#" className={link.root({
 *   underline: {
 *     base: false,
 *     hover: true
 *   }
 * })}>
 *   Documentation <Icon name="external-link" />
 * </a>
 *
 * // Common pattern: Navigation link
 * <a href="/about" className={link.root()}>
 *   About us
 * </a>
 *
 * // Common pattern: Action link
 * <a href="/settings" className={link.root({
 *   underline: false
 * })}>
 *   Settings <Icon name="gear" />
 * </a>
 * ```
 *
 * @variant underline
 * - true {boolean} - Adds underline decoration
 * - false {boolean} - Removes underline decoration
 *
 * @default
 * - underline: true
 *
 * @see canFocus - Adds focus ring styles
 *
 * @interface LinkVariants
 * @property {boolean} [underline] - Controls text decoration
 *
 * @type {import('../styleshift').StyleshiftComponent<LinkVariants>}
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
  root: styleshift.compose(
    canFocus,
    styleshift.define({
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
    }),
  ),
};

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
const text = {
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
