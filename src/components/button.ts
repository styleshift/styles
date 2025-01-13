import { cva, type VariantProps } from 'class-variance-authority';
import { focus } from '../shared';

const rootDefaultVariants = {
  surface: 'solid',
  size: 'md',
  isDisabled: false,
} as const;

const rootBase = [
  ...focus,
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-medium',
  'rounded',
  'whitespace-nowrap',
  'transition-all',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
] as const;

const rootSurfaces = {
  solid: ['bg-slate-800', 'text-white', 'hover:bg-slate-700', 'shared-visible:ring-slate-800'],
  outline: ['border', 'border-slate-800', 'text-slate-800', 'hover:bg-slate-50', 'shared-visible:ring-slate-800'],
  ghost: ['text-slate-800', 'hover:bg-slate-100', 'shared-visible:ring-slate-800'],
  soft: ['bg-slate-100', 'text-slate-800', 'hover:bg-slate-200', 'shared-visible:ring-slate-800'],
} as const;

const rootSizes = {
  sm: 'text-sm h-8 px-4',
  md: 'text-base h-10 px-4',
  lg: 'text-lg h-12 px-4',
} as const;

const rootVariants = {
  surface:rootSurfaces,
  size: rootSizes,
} as const;

export const button = cva(rootBase, {
  variants: rootVariants,
  defaultVariants: rootDefaultVariants,
});

export type ButtonVariants = VariantProps<typeof button>;
