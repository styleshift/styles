import styleshift from '../styleshift';

export const alert = {
  root: styleshift.define({
    base: [
      'relative',
      'w-full',
      'rounded-lg',
      'border',
      'p-4',
      'transition-all',
      '[&>svg~*]:pl-7',
      '[&>svg+div]:translate-y-[-3px]',
      '[&>svg]:absolute',
      '[&>svg]:left-4',
      '[&>svg]:top-4',
      '[&>svg]:text-foreground',
    ],
    variants: {
      surface: {
        default: ['bg-background', 'text-foreground', 'border-border'],
        negative: [
          'border-red-200',
          'text-red-500',
          'dark:border-red-400',
          '[&>svg]:text-red-500',
          'dark:[&>svg]:text-red-400',
        ],
        positive: [
          'border-green-200',
          'text-green-700',
          'dark:text-green-400',
          '[&>svg]:text-green-700',
          'dark:[&>svg]:text-green-400',
        ],
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
