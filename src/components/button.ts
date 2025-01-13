import { disabled, focus, cva, type VariantProps } from '../shared';

const rootBase = [
  ...focus,
  ...disabled,
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-[500]',
  'rounded',
  'whitespace-nowrap',
  'transition-all',
  'border-2',
] as const;

const rootSurfaces = {
  solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
  outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
  ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
  soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
} as const;

const rootSizes = {
  sm: 'text-sm h-8 px-4',
  base: 'text-base h-10 px-4',
  md: 'text-md h-12 px-5',
  lg: 'text-lg h-14 px-5',
} as const;

const rootDisabled = {
  true: [],
  false: [],
};

export const button = {
  root: cva(rootBase, {
    variants: {
      surface: rootSurfaces,
      size: rootSizes,
      isDisabled: rootDisabled,
    },
    defaultVariants: {
      surface: 'solid',
      size: 'base',
      isDisabled: false,
    },
  }),
};

export type ButtonRootVariants = VariantProps<typeof button.root>;
