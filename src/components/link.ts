import { cva, type VariantProps } from 'class-variance-authority';
import { disabled, focus } from '../shared';

const rootBase = [
  ...focus,
  'text-blue-700',
  'hover:text-blue-800',
  'underline',
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'rounded',
  'transition-all',
] as const;

const rootSizes = {
  default: '',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
} as const;

export const link = {
  root: cva(rootBase, {
    variants: {
      size: rootSizes,
    },
    defaultVariants: {
      size: 'default',
    },
  }),
};

export type LinkRootVariants = VariantProps<typeof link.root>;
