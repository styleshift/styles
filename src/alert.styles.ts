export default {
 root: {
  base: [
   'relative',
   'w-full',
   'rounded-lg',
   'border',
   'py-3',
   'px-4',
   'transition-all',
  ],
  variants: {
   surface: {
    default: ['border-slate-300', 'bg-slate-50/25', 'text-slate-700'],
    negative: ['border-red-300', 'bg-red-50/25', 'text-red-700'],
    positive: ['border-green-300', 'bg-green-50/25', 'text-green-700'],
   },
  },
  defaultVariants: {
   surface: 'default',
  },
 },
 title: {
  base: ['mb-1', 'font-medium', 'leading-none', 'tracking-tight'],
 },
 description: {
  base: ['opacity-80'],
 },
} as const;
