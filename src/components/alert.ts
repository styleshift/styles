import styleshift from '../styleshift';

export const alertDocs = {
  root: {
    variants: {
      surface: ['default', 'negative', 'positive'],
    },
  },
  title: {},
  description: {},
} as const;

export const alertStyles = {
  root: {
    base: [
      'relative',
      'w-full',
      'rounded-lg',
      'border',
      'p-4',
      'transition-all',
    ],
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
  },
  title: {
    base: ['mb-1', 'font-medium', 'leading-none', 'tracking-tight'],
  },
  description: {
    base: ['text-sm', 'opacity-90'],
  },
} as const;

export const alert = {
  root: styleshift.define(alertStyles.root),
  title: styleshift.define(alertStyles.title),
  description: styleshift.define(alertStyles.description),
};
