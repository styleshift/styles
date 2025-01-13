import styleshift from '../styleshift';

/**
 * The `text` object provides a set of utility classes for styling text elements.
 * It uses the `cva` function to create a variant-based styling system.
 */
export const text = {
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
