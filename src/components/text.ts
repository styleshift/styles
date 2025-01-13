import styleshift from '../styleshift';

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
export const text = {
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
