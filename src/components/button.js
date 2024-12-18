import focusable from '../shared/focusable.js';
import radius from '../shared/variants/radius.js';
import isFullWidth from '../shared/variants/isFullWidth.js';
import isDisabled from '../shared/variants/isDisabled.js';
import inputSize from '../shared/variants/inputSize.js';

export default {
  base: [
    ...focusable,

    'relative',
    'z-0',
    'inline-flex',
    'items-center',
    'justify-center',
    'min-w-max',

    'border-2',
    'box-border',
    'overflow-hidden',

    'font-normal',
    'whitespace-nowrap',
    'subpixel-antialiased',

    'group',
    'appearance-none',
    'outline-none',
    'select-none',
    'tap-highlight-transparent',

    'shadow-sm',
    'active:opacity-90',

    'transition-all',
    'will-change-transform',
    'duration-200',
  ],
  variants: {
    radius,
    isFullWidth,
    isDisabled,
    size: inputSize,
    surface: {
      solid: ['shadow-sm', 'border-transparent'],
      outline: ['bg-transparent', 'shadow-sm', 'hover:text-white', 'active:shadow-inner'],
      soft: ['bg-opacity-15', 'border-transparent', 'hover:bg-opacity-25', 'shadow-sm'],
      ghost: ['bg-transparent', 'border-transparent', 'shadow-none'],
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
        'bg-primary-600',
        'text-white',
        'hover:bg-primary-700',
        'hover:shadow',
        'active:shadow-inner',
        'ring-primary-500',
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
      class: ['border-primary-500', 'text-primary-700', 'hover:bg-primary-50', 'hover:text-primary-800'],
    },
    {
      surface: 'outline',
      color: 'secondary',
      class: ['border-secondary-500', 'text-secondary-700', 'hover:bg-secondary-50', 'hover:text-secondary-800'],
    },
    {
      surface: 'outline',
      color: 'positive',
      class: ['border-positive-500', 'text-positive-700', 'hover:bg-positive-50', 'hover:text-positive-800'],
    },
    {
      surface: 'outline',
      color: 'negative',
      class: ['border-negative-500', 'text-negative-700', 'hover:bg-negative-50', 'hover:text-negative-800'],
    },
    {
      surface: 'outline',
      color: 'warning',
      class: ['border-warning-500', 'text-warning-700', 'hover:bg-warning-50', 'hover:text-warning-800'],
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
      class: ['text-primary-600', 'hover:bg-primary-50/50', 'active:bg-primary-100'],
    },
    {
      surface: 'ghost',
      color: 'secondary',
      class: ['text-secondary-600', 'hover:bg-secondary-50/50', 'active:bg-secondary-100'],
    },
    {
      surface: 'ghost',
      color: 'positive',
      class: ['text-positive-600', 'hover:bg-positive-50/50', 'active:bg-positive-100'],
    },
    {
      surface: 'ghost',
      color: 'negative',
      class: ['text-negative-600', 'hover:bg-negative-50/50', 'active:bg-negative-100'],
    },
    {
      surface: 'ghost',
      color: 'warning',
      class: ['text-warning-600', 'hover:bg-warning-50/50', 'active:bg-warning-100'],
    },
    {
      surface: 'ghost',
      color: 'black',
      class: ['text-neutral-800', 'hover:bg-neutral-50/50', 'active:bg-neutral-100'],
    },
    {
      surface: 'ghost',
      color: 'white',
      class: ['text-black', 'hover:bg-white/10', 'active:bg-white/20'],
    },
  ],
};
