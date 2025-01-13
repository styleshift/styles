import { cva, type VariantProps } from 'class-variance-authority';
import { disabled, focus } from '../shared';

const rootBase = [
  ...focus,
  'text-indigo-700',
  'underline',
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'rounded',
  'transition-all',
] as const;

const rootSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

export const link = {
  root: cva(rootBase, {
    variants: {
      size: rootSizes,
    },
    defaultVariants: {
      size: 'md',
    },
  }),
};

export type LinkRootVariants = VariantProps<typeof link.root>;
