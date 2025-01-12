import { cva, type VariantProps } from 'class-variance-authority';
import { focus } from '../shared';

/**
 * @typedef {Object} ButtonVariants
 * @property {'solid' | 'outline' | 'ghost' | 'soft'} [surface]
 * @property {'sm' | 'md' | 'lg'} [size]
 */

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
];

const rootSurfaces = {
  solid: ['bg-slate-800', 'text-white', 'hover:bg-slate-700', 'shared-visible:ring-slate-800'],
  outline: ['border', 'border-slate-800', 'text-slate-800', 'hover:bg-slate-50', 'shared-visible:ring-slate-800'],
  ghost: ['text-slate-800', 'hover:bg-slate-100', 'shared-visible:ring-slate-800'],
  soft: ['bg-slate-100', 'text-slate-800', 'hover:bg-slate-200', 'shared-visible:ring-slate-800'],
};

const rootSizes = {
  sm: 'text-sm h-8 px-4',
  md: 'text-base h-10 px-4',
  lg: 'text-lg h-12 px-4',
};

const rootVariants = {
  surface: {
    solid: rootSurfaces.solid,
    outline: rootSurfaces.outline,
    ghost: rootSurfaces.ghost,
    soft: rootSurfaces.soft,
  },
  size: {
    sm: rootSizes.sm,
    md: rootSizes.md,
    lg: rootSizes.lg,
  },
} as const;

/**
 * Button component styles
 * @param {ButtonVariants} props
 * @returns {string}
 */
export const button = cva(rootBase, {
  variants: rootVariants,
  defaultVariants: rootDefaultVariants,
});

export type ButtonVariants = VariantProps<typeof button>;
