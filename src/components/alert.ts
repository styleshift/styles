import styleshift from '../styleshift';

export const alert = {
  root: styleshift.define({
    base: ['relative', 'w-full', 'rounded-lg', 'border', 'p-4', 'transition-all'],
    variants: {
      surface: {
        default: ['border-slate-500', 'text-slate-800'],
        negative: ['border-red-500', 'text-red-800'],
        positive: ['border-green-500', 'text-green-800'],
      },
    },
    defaultVariants: {
      surface: 'default',
    },
  }),
  title: styleshift.define({
    base: ['mb-1', 'font-medium', 'leading-none', 'tracking-tight'],
  }),
  description: styleshift.define({
    base: ['text-sm', 'opacity-90'],
  }),
};
