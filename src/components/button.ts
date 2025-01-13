import { cva, type VariantProps } from 'class-variance-authority';
import { disabled, focus } from '../shared';

const rootBase = [
  ...focus,
  ...disabled,
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-medium',
  'rounded',
  'whitespace-nowrap',
  'transition-all',
] as const;

const rootSurfaces = {
  solid: ['bg-slate-800', 'text-white', 'hover:bg-slate-700'],
  outline: ['border', 'border-slate-800', 'text-slate-800', 'hover:bg-slate-50'],
  ghost: ['text-slate-800', 'hover:bg-slate-100'],
  soft: ['bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
} as const;

const rootSizes = {
  sm: 'text-sm h-8 px-4',
  md: 'text-base h-10 px-4',
  lg: 'text-lg h-12 px-4',
} as const;

const rootDisabled = {
  true: [],
  false: [],
};

export const button = cva(rootBase, {
  variants: {
    surface: rootSurfaces,
    size: rootSizes,
    isDisabled: rootDisabled,
  },
  defaultVariants: {
    surface: 'solid',
    size: 'md',
    isDisabled: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;
