import styleshift from '../styleshift';

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
export const card = {
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
