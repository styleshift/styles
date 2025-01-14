const linkStyles = {
 root: {
  base: [
   'text-blue-700',
   'hover:text-blue-800',
   'inline-flex',
   'items-center',
   'justify-center',
   'gap-2',
   'rounded',
   'transition-all',
  ],
  variants: {
   underline: {
    true: 'underline',
    false: 'no-underline',
   },
  },
  defaultVariants: {
   underline: true,
  },
 },
} as const;

export { linkStyles };
