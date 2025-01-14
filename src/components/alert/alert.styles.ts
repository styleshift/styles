export default {
 root: {
  base: ['relative', 'w-full', 'rounded-lg', 'border', 'p-4', 'transition-all'],
  variants: {
   surface: {
    default: ['border-slate-400', 'bg-slate-50/25', 'text-slate-700'],
    negative: ['border-red-400', 'bg-red-50/25', 'text-red-700'],
    positive: ['border-green-400', 'bg-green-50/25', 'text-green-700'],
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
  base: ['text-sm', 'opacity-90'],
 },
} as const;
