import styleshift from '../styleshift';

/**
 * Card component styling configuration using CVA (Class Variance Authority)
 * Provides consistent styling for card components with customizable variants
 */
export const card = {
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
        default: '',
        xs: 'p-2',
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-16',
        xl: 'p-24',
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
    base: ['border-b justify-between items-center'],
    variants: {
      space: {
        default: '',
        xs: 'px-2 pt-2',
        sm: 'px-4 pt-4',
        md: 'px-8 pt-8',
        lg: 'px-16 pt-16',
        xl: 'px-24 pt-24',
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
        class: 'pb-2',
      },
      {
        border: true,
        space: 'sm',
        class: 'pb-4',
      },
      {
        border: true,
        space: 'lg',
        class: 'pb-16',
      },
      {
        border: true,
        space: 'xl',
        class: 'pb-24',
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
        lg: 'p-16',
        xl: 'p-24',
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
    base: ['border-t justify-between items-center'],
    variants: {
      space: {
        default: '',
        xs: 'px-2 pb-2',
        sm: 'px-4 pb-4',
        md: 'px-8 pb-8',
        lg: 'px-16 pb-16',
        xl: 'px-24 pb-24',
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
        class: 'pt-2',
      },
      {
        border: true,
        space: 'sm',
        class: 'pt-4',
      },
      {
        border: true,
        space: 'lg',
        class: 'pt-16',
      },
      {
        border: true,
        space: 'xl',
        class: 'pt-24',
      },
    ],
  }),
};
