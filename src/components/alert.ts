import styleshift from '../styleshift';

export const alert = {
  root: styleshift.define({
    base: ['relative', 'w-full', 'rounded-lg', 'border', 'p-4', 'transition-all'],
    variants: {
      surface: {
        default: ['bg-background', 'text-foreground', 'border-border'],
        negative: ['border-red-200', 'text-red-500'],
        positive: ['border-green-200', 'text-green-700'],
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
