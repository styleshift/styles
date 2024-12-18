export default {
  base: [
    'whitespace-nowrap font-medium',
    'inline-flex items-center w-min gap-x-2 ',
    'rounded border border-transparent',
    'focus:outline-none focus:ring-2',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  variants: {
    color: {
      primary: [
        'bg-neutral-800 text-white',
        'hover:bg-neutral-900 focus:border-blue-500',
        'focus:ring-blue-500 dark:focus:ring-neutral-600',
        'dark:focus:ring-neutral-600',
        'dark:bg-neutral-900 dark:hover:bg-neutral-700',
        'dark:text-gray-200 dark:focus:border-neutral-600',
      ],
      secondary: [
        'bg-neutral-500 text-white',
        'hover:bg-neutral-600 focus:border-neutral-700',
        'focus:ring-neutral-500',
        'dark:bg-neutral-700 dark:hover:bg-neutral-600',
        'dark:text-gray-100 dark:focus:ring-neutral-400',
      ],
    },
    surface: {
      solid: [
        'bg-white text-neutral-900',
        'hover:bg-neutral-100 focus:border-neutral-300',
        'focus:ring-neutral-200',
        'dark:bg-neutral-800 dark:text-neutral-100',
        'dark:hover:bg-neutral-700 dark:focus:border-neutral-600',
        'dark:focus:ring-neutral-700',
      ],
      outline: [
        'bg-transparent text-neutral-900 border-neutral-300',
        'hover:bg-neutral-100 focus:border-neutral-400',
        'focus:ring-neutral-200',
        'dark:text-neutral-100 dark:border-neutral-700',
        'dark:hover:bg-neutral-800 dark:focus:border-neutral-600',
        'dark:focus:ring-neutral-700',
      ],
      soft: [
        'bg-neutral-100 text-neutral-900',
        'hover:bg-neutral-200 focus:border-neutral-300',
        'focus:ring-neutral-200',
        'dark:bg-neutral-800 dark:text-neutral-100',
        'dark:hover:bg-neutral-700 dark:focus:border-neutral-600',
        'dark:focus:ring-neutral-700',
      ],
      ghost: [
        'bg-transparent text-neutral-900',
        'hover:bg-neutral-100 focus:border-neutral-300',
        'focus:ring-neutral-200',
        'dark:text-neutral-100',
        'dark:hover:bg-neutral-800 dark:focus:border-neutral-600',
        'dark:focus:ring-neutral-700',
      ],
      link: [
        'bg-transparent text-neutral-900 border-transparent',
        'hover:underline focus:border-neutral-300',
        'focus:ring-neutral-200',
        'dark:text-neutral-100',
        'dark:focus:border-neutral-600 dark:focus:ring-neutral-700',
      ],
    },
    size: {
      sm: 'text-sm h-6 px-2',
      md: 'text-base h-9 px-3',
      lg: 'text-lg h-12 px-4',
    },
  },
  compoundVariants: [
    // Size spacing combinations with refined gaps
    {
      color: ['surface', 'primary', 'secondary'],
      size: 'sm',
      class: 'gap-x-1.5 rounded-md',
    },
    {
      color: ['surface', 'primary', 'secondary'],
      size: 'md',
      class: 'gap-x-2 rounded-lg',
    },
    {
      color: ['surface', 'primary', 'secondary'],
      size: 'lg',
      class: 'gap-x-2.5 rounded-lg',
    },
    // Surface variant specific adjustments with better transitions
    {
      color: ['surface'],
      variant: ['link', 'ghost'],
      class: 'w-auto border-transparent transition-colors duration-200',
    },
    // Link and Ghost refined interactions
    {
      color: ['surface'],
      variant: ['link', 'ghost'],
      size: 'sm',
      class: 'px-1 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50',
    },
    {
      color: ['surface'],
      variant: ['link', 'ghost'],
      size: 'md',
      class: 'px-1.5 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50',
    },
    {
      color: ['surface'],
      variant: ['link', 'ghost'],
      size: 'lg',
      class: 'px-2 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50',
    },
    // Enhanced solid and soft hover effects
    {
      color: ['surface'],
      variant: ['solid', 'soft'],
      class: [
        'transition-all duration-200',
        'hover:shadow-sm hover:translate-y-[-1px]',
        'active:shadow-none active:translate-y-0',
      ],
    },
    // Improved outline specific styles
    {
      color: ['surface'],
      variant: 'outline',
      class: [
        'transition-all duration-200',
        'shadow-sm hover:shadow hover:translate-y-[-1px]',
        'active:shadow-none active:translate-y-0',
      ],
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
};
