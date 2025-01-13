import { disabled, focus, cva, type VariantProps } from '../shared';

const rootBase = [
  ...focus,
  'text-blue-700',
  'hover:text-blue-800',
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'rounded',
  'transition-all',
] as const;

const rootUnderline = {
  true: 'underline',
  false: 'no-underline',
} as const;

export const link = {
  root: cva(rootBase, {
    variants: {
      underline: rootUnderline,
    },
    defaultVariants: {
      underline: true,
    },
  }),
};

export type LinkRootVariants = VariantProps<typeof link.root>;
