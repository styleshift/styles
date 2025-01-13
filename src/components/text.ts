import styleshift from '../styleshift';

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
export const text = {
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
