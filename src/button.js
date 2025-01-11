import { cva } from 'class-variance-authority';

const baseStyles = [
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

const surfaceVariants = {
  solid: [
    'bg-slate-800',
    'text-white',
    'hover:bg-slate-700',
    'focus-visible:ring-slate-800',
  ],
  outline: [
    'border',
    'border-slate-800',
    'text-slate-800',
    'hover:bg-slate-50',
    'focus-visible:ring-slate-800',
  ],
  ghost: [
    'text-slate-800',
    'hover:bg-slate-100',
    'focus-visible:ring-slate-800',
  ],
  soft: [
    'bg-slate-100',
    'text-slate-800',
    'hover:bg-slate-200',
    'focus-visible:ring-slate-800',
  ],
};

const sizeVariants = {
  sm: 'text-sm h-8 px-4',
  md: 'text-base h-10 px-4',
  lg: 'text-lg h-12 px-4',
};

const button = cva(baseStyles, {
  variants: {
    surface: surfaceVariants,
    size: sizeVariants,
  },
  defaultVariants: {
    surface: 'solid',
    size: 'md',
  },
});

export default { root: button };
