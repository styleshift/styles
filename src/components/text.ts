import { cva, type VariantProps } from 'class-variance-authority';

const rootBase = [
  'text-slate-800',
  'transition-all',
] as const;

const rootSizes = {
  default: "",
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
} as const;

export const text = {
  root: cva(rootBase, {
    variants: {
      size: rootSizes,
    },
    defaultVariants: {
      size: 'default',
    },
  }),
};

export type TextRootVariants = VariantProps<typeof text.root>;
