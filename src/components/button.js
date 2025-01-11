import { cva } from 'class-variance-authority';

/**
 * Button style variants using class-variance-authority
 *
 * @typedef {Object} ButtonVariants
 * @property {'solid' | 'ghost' | 'outline' | 'soft'} [surface='solid'] - Visual style of the button
 * @property {'sm' | 'md' | 'lg'} [size='md'] - Size variant controlling height and padding
 *
 * Surface Variants:
 * - solid: Primary action, high emphasis
 * - ghost: Secondary action, low emphasis
 * - outline: Secondary action, medium emphasis
 * - soft: Tertiary action, subtle emphasis
 *
 * Size Variants:
 * - sm: Small text, small height
 * - md: Medium text, medium height
 * - lg: Large text, large height
 *
 * @example
 * ```tsx
 * <button className={button.root({ variant: 'outline', size: 'sm' })}>
 *   Click me
 * </button>
 * ```
 */

const rootDefaultVariants = {
  surface: 'solid',
  size: 'md',
};

const rootBase = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-medium',
  'rounded',
  'whitespace-nowrap',
  'transition-all',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
];

const rootSurfaces = {
  solid: ['bg-slate-800', 'text-white', 'hover:bg-slate-700', 'focus-visible:ring-slate-800'],
  outline: ['border', 'border-slate-800', 'text-slate-800', 'hover:bg-slate-50', 'focus-visible:ring-slate-800'],
  ghost: ['text-slate-800', 'hover:bg-slate-100', 'focus-visible:ring-slate-800'],
  soft: ['bg-slate-100', 'text-slate-800', 'hover:bg-slate-200', 'focus-visible:ring-slate-800'],
};

const rootSizes = {
  sm: 'text-sm h-8 px-4',
  md: 'text-base h-10 px-4',
  lg: 'text-lg h-12 px-4',
};

const rootVariants = {
  surface: rootSurfaces,
  size: rootSizes,
};

const root = cva(rootBase, {
  variants: rootVariants,
  defaultVariants: rootDefaultVariants,
});

export default { root };
