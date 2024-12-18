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
    },
    size: {
      sm: 'text-sm h-6 px-2',
      md: 'text-base h-9 px-3',
      lg: 'text-lg h-12 px-4',
    },
  },
  compoundVariants: [
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
};
