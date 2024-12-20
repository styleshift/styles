import { inputSize, isDisabled, isFullWidth, radius } from '../shared/variants/index.js';
import { focusable, generic, transitions } from '../shared/base/index.js';
import disableAnimation from '../shared/variants/disableAnimation.js';

/**
 * StyleShift Button Styles
 */
export default {
  base: [
    ...generic,
    ...focusable,
    ...transitions,
    'inline-flex',
    'items-center',
    'justify-center',
    'active:opacity-90',
    'border',
    'font-medium',
    'group',
    'min-w-max',
    'overflow-hidden',
    'tap-highlight-transparent',
    'whitespace-nowrap',
    'z-0',
  ],
  variants: {
    radius,
    isFullWidth,
    isDisabled,
    size: inputSize,
    disableAnimation,
    surface: {
      solid: ['border-transparent'],
      outline: ['active:shadow-inner', 'bg-transparent', 'hover:text-white'],
      soft: ['bg-opacity-15', 'border-transparent', 'hover:bg-opacity-25'],
      ghost: ['bg-transparent', 'border-transparent'],
    },
    color: {
      primary: [],
      secondary: [],
      positive: [],
      negative: [],
      warning: [],
      black: [],
      white: [],
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
    radius: 'medium',
    fullWidth: false,
    isDisabled: false,
    surface: 'solid',
  },
  compoundVariants: [
    {
      size: 'tiny',
      radius: 'medium',
      class: ['rounded-sm'],
    },
    {
      size: 'small',
      radius: 'medium',
      class: ['rounded-sm'],
    },
    {
      size: 'medium',
      radius: 'medium',
      class: ['rounded-md'],
    },
    {
      size: 'large',
      radius: 'medium',
      class: ['rounded-lg'],
    },
    {
      size: 'huge',
      radius: 'medium',
      class: ['rounded-lg'],
    },

    {
      surface: 'solid',
      color: 'primary',
      class: [
        'active:shadow-inner',
        'bg-primary-600',
        'hover:bg-primary-700',
        'hover:shadow',
        'ring-primary-500',
        'text-white',
      ],
    },
    {
      surface: 'solid',
      color: 'secondary',
      class: [
        'bg-secondary-600',
        'text-white',
        'hover:bg-secondary-700',
        'hover:shadow',
        'active:shadow-inner',
        'ring-secondary-500',
      ],
    },
    {
      surface: 'solid',
      color: 'positive',
      class: [
        'bg-positive-600',
        'text-white',
        'hover:bg-positive-700',
        'hover:shadow',
        'active:shadow-inner',
        'ring-positive-500',
      ],
    },
    {
      surface: 'solid',
      color: 'negative',
      class: [
        'bg-negative-600',
        'text-white',
        'hover:bg-negative-700',
        'hover:shadow',
        'active:shadow-inner',
        'ring-negative-500',
      ],
    },
    {
      surface: 'solid',
      color: 'warning',
      class: [
        'bg-warning-600',
        'text-white',
        'hover:bg-warning-700',
        'hover:shadow',
        'active:shadow-inner',
        'ring-warning-500',
      ],
    },
    {
      surface: 'solid',
      color: 'black',
      class: ['bg-black', 'text-white', 'hover:bg-neutral-900', 'hover:shadow', 'active:shadow-inner', 'ring-black'],
    },
    {
      surface: 'solid',
      color: 'white',
      class: [
        'bg-white',
        'text-neutral-900',
        'border',
        'border-neutral-300',
        'hover:bg-neutral-100',
        'hover:shadow',
        'active:shadow-inner',
        'ring-neutral-500',
      ],
    },
    {
      surface: 'outline',
      color: 'primary',
      class: ['border-primary-500', 'text-primary-700', 'hover:bg-primary-25', 'hover:text-primary-800'],
    },
    {
      surface: 'outline',
      color: 'secondary',
      class: ['border-secondary-500', 'text-secondary-700', 'hover:bg-secondary-25', 'hover:text-secondary-800'],
    },
    {
      surface: 'outline',
      color: 'positive',
      class: ['border-positive-500', 'text-positive-700', 'hover:bg-positive-25', 'hover:text-positive-800'],
    },
    {
      surface: 'outline',
      color: 'negative',
      class: ['border-negative-500', 'text-negative-700', 'hover:bg-negative-25', 'hover:text-negative-800'],
    },
    {
      surface: 'outline',
      color: 'warning',
      class: ['border-warning-500', 'text-warning-700', 'hover:bg-warning-25', 'hover:text-warning-800'],
    },
    {
      surface: 'outline',
      color: 'black',
      class: ['border-neutral-900', 'text-neutral-900', 'hover:bg-neutral-100', 'hover:text-neutral-950'],
    },
    {
      surface: 'outline',
      color: 'white',
      class: ['border-white', 'text-black', 'hover:text-black', 'border-black/25'],
    },
    {
      surface: 'soft',
      color: 'primary',
      class: ['bg-primary-100', 'text-primary-800', 'hover:bg-primary-200'],
    },
    {
      surface: 'soft',
      color: 'secondary',
      class: ['bg-secondary-100', 'text-secondary-800', 'hover:bg-secondary-200'],
    },
    {
      surface: 'soft',
      color: 'positive',
      class: ['bg-positive-100', 'text-positive-800', 'hover:bg-positive-200'],
    },
    {
      surface: 'soft',
      color: 'negative',
      class: ['bg-negative-100', 'text-negative-800', 'hover:bg-negative-200'],
    },
    {
      surface: 'soft',
      color: 'warning',
      class: ['bg-warning-100', 'text-warning-800', 'hover:bg-warning-200'],
    },
    {
      surface: 'soft',
      color: 'black',
      class: ['bg-neutral-100', 'text-neutral-800', 'hover:bg-neutral-200'],
    },
    {
      surface: 'soft',
      color: 'white',
      class: ['bg-white/10', 'text-black', 'hover:bg-white/15'],
    },
    {
      surface: 'ghost',
      color: 'primary',
      class: ['text-primary-600', 'hover:bg-primary-25', 'active:bg-primary-100'],
    },
    {
      surface: 'ghost',
      color: 'secondary',
      class: ['text-secondary-600', 'hover:bg-secondary-25', 'active:bg-secondary-100'],
    },
    {
      surface: 'ghost',
      color: 'positive',
      class: ['text-positive-600', 'hover:bg-positive-25', 'active:bg-positive-100'],
    },
    {
      surface: 'ghost',
      color: 'negative',
      class: ['text-negative-600', 'hover:bg-negative-25', 'active:bg-negative-100'],
    },
    {
      surface: 'ghost',
      color: 'warning',
      class: ['text-warning-600', 'hover:bg-warning-25', 'active:bg-warning-100'],
    },
    {
      surface: 'ghost',
      color: 'black',
      class: ['text-neutral-800', 'hover:bg-neutral-25', 'active:bg-neutral-100'],
    },
    {
      surface: 'ghost',
      color: 'white',
      class: ['text-black', 'hover:bg-white/10', 'active:bg-white/20'],
    },
  ],
};
