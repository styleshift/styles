export default {
  base: [
    // Box Model & Display
    'box-border',
    'min-w-max',
    'min-w-fit',
    'overflow-hidden',
    'inline-flex',
    'z-0',

    // Typography & Text
    'subpixel-antialiased',
    'text-inherit',
    'whitespace-nowrap',
    'font-medium',

    // Flex Layout
    'items-center',
    'justify-center',

    // Interaction & State
    'appearance-none',
    'outline-none',
    'select-none',
    'cursor-default',
    'active:opacity-90',
    'tap-highlight-transparent',

    // Border & Background
    'border-2',
    'bg-transparent',

    // Misc
    'group',
  ],
  variants: {
    surface: {
      solid: ['border-transparent'],
      outline: ['active:shadow-inner', 'bg-transparent', 'hover:text-white'],
      soft: ['bg-opacity-50', 'border-transparent', 'hover:bg-opacity-50'],
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
    rounded: {
      none: ['rounded-none'],
      xs: ['rounded-xs'],
      sm: ['rounded-sm'],
      default: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      xl: ['rounded-xl'],
      full: ['rounded-full'],
    },
    isFullWidth: {
      true: ['w-full'],
      false: ['w-auto'],
    },
    size: {
      xs: ['px-2', 'min-w-12', 'h-6', 'text-xs', 'gap-1.5'],
      sm: ['px-3', 'min-w-16', 'h-8', 'text-sm', 'gap-2'],
      default: ['px-3', 'min-w-16', 'h-8', 'text-base', 'gap-2'],
      md: ['px-4', 'min-w-20', 'h-10', 'text-md', 'gap-2'],
      lg: ['px-6', 'min-w-24', 'h-12', 'text-lg', 'gap-3'],
      xl: ['px-8', 'min-w-32', 'h-14', 'text-xl', 'gap-4'],
      '2xl': ['px-10', 'min-w-36', 'h-16', 'text-2xl', 'gap-4'],
    },
    disabled: {
      true: ['opacity-50', 'cursor-not-allowed', 'pointer-events-none'],
      false: ['opacity-100', 'cursor-auto', 'pointer-events-auto'],
    },
    disableFocus: {
      true: ['outline-none', 'focus:outline-none', 'focus:ring-0'],
      false: ['outline-none', 'focus:z-10', 'focus:ring-2', 'focus:ring-opacity-50'],
    },
    disableTransition: {
      true: ['!transition-none *:transition-none'],
      false: ['!transition-all'],
    },
  },
  defaultVariants: {
    isFullWidth: false,
    surface: 'solid',
    color: 'primary',
    rounded: 'default',
    size: 'default',
    disableTransition: false,
    disabled: false,
    disableFocus: false,
  },
  compoundVariants: [
    {
      disabled: true,
      disableFocus: false,
      class: ['!outline-none', '!focus:outline-none', '!pointer-events-none'],
    },

    {
      surface: 'solid',
      color: 'primary',
      class: ['bg-primary-700', 'hover:bg-primary-800', 'active:bg-primary-600', 'ring-primary-400', 'text-white'],
    },
    {
      surface: 'solid',
      color: 'secondary',
      class: [
        'bg-secondary-700',
        'hover:bg-secondary-800',
        'active:bg-secondary-600',
        'ring-secondary-400',
        'text-white',
      ],
    },
    {
      surface: 'solid',
      color: 'positive',
      class: ['bg-positive-700', 'hover:bg-positive-800', 'active:bg-positive-600', 'ring-positive-400', 'text-white'],
    },
    {
      surface: 'solid',
      color: 'negative',
      class: ['bg-negative-700', 'hover:bg-negative-800', 'active:bg-negative-600', 'ring-negative-400', 'text-white'],
    },
    {
      surface: 'solid',
      color: 'warning',
      class: ['bg-warning-700', 'hover:bg-warning-800', 'active:bg-warning-600', 'ring-warning-400', 'text-white'],
    },
    {
      surface: 'solid',
      color: 'black',
      class: ['bg-black', 'text-white', 'hover:bg-primary-900', 'hover:shadow', 'active:shadow-inner', 'ring-black'],
    },
    {
      surface: 'solid',
      color: 'white',
      class: [
        'bg-white',
        'text-primary-900',
        'border-primary-300',
        'hover:bg-primary-100',
        'hover:shadow',
        'active:shadow-inner',
        'ring-primary-500',
      ],
    },
    {
      surface: 'outline',
      color: 'primary',
      class: ['border-primary-600', 'text-primary-600', 'hover:bg-primary-50', 'hover:text-primary-700'],
    },
    {
      surface: 'outline',
      color: 'secondary',
      class: ['border-secondary-600', 'text-secondary-600', 'hover:bg-secondary-50', 'hover:text-secondary-700'],
    },
    {
      surface: 'outline',
      color: 'positive',
      class: ['border-positive-600', 'text-positive-600', 'hover:bg-positive-50', 'hover:text-positive-700'],
    },
    {
      surface: 'outline',
      color: 'negative',
      class: ['border-negative-600', 'text-negative-600', 'hover:bg-negative-50', 'hover:text-negative-700'],
    },
    {
      surface: 'outline',
      color: 'warning',
      class: ['border-warning-600', 'text-warning-600', 'hover:bg-warning-50', 'hover:text-warning-700'],
    },
    {
      surface: 'outline',
      color: 'black',
      class: ['border-primary-900', 'text-primary-900', 'hover:bg-primary-100', 'hover:text-primary-950'],
    },
    {
      surface: 'outline',
      color: 'white',
      class: ['border-white', 'text-black', 'hover:text-black', 'border-black/50'],
    },
    {
      surface: 'soft',
      color: 'primary',
      class: ['bg-primary-100', 'text-primary-600', 'hover:bg-primary-200'],
    },
    {
      surface: 'soft',
      color: 'secondary',
      class: ['bg-secondary-100', 'text-secondary-600', 'hover:bg-secondary-200'],
    },
    {
      surface: 'soft',
      color: 'positive',
      class: ['bg-positive-100', 'text-positive-600', 'hover:bg-positive-200'],
    },
    {
      surface: 'soft',
      color: 'negative',
      class: ['bg-negative-100', 'text-negative-600', 'hover:bg-negative-200'],
    },
    {
      surface: 'soft',
      color: 'warning',
      class: ['bg-warning-100', 'text-warning-600', 'hover:bg-warning-200'],
    },
    {
      surface: 'soft',
      color: 'black',
      class: ['bg-primary-100', 'text-primary-600', 'hover:bg-primary-200'],
    },
    {
      surface: 'soft',
      color: 'white',
      class: ['bg-white/10', 'text-black', 'hover:bg-white/15'],
    },
    {
      surface: 'ghost',
      color: 'primary',
      class: ['text-primary-600', 'hover:bg-primary-50', 'active:bg-primary-100'],
    },
    {
      surface: 'ghost',
      color: 'secondary',
      class: ['text-secondary-600', 'hover:bg-secondary-50', 'active:bg-secondary-100'],
    },
    {
      surface: 'ghost',
      color: 'positive',
      class: ['text-positive-600', 'hover:bg-positive-50', 'active:bg-positive-100'],
    },
    {
      surface: 'ghost',
      color: 'negative',
      class: ['text-negative-600', 'hover:bg-negative-50', 'active:bg-negative-100'],
    },
    {
      surface: 'ghost',
      color: 'warning',
      class: ['text-warning-600', 'hover:bg-warning-50', 'active:bg-warning-100'],
    },
    {
      surface: 'ghost',
      color: 'black',
      class: ['text-primary-800', 'hover:bg-primary-50', 'active:bg-primary-100'],
    },
    {
      surface: 'ghost',
      color: 'white',
      class: ['text-black', 'hover:bg-white/10', 'active:bg-white/20'],
    },
  ],
};