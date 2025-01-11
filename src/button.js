import { cva } from 'class-variance-authority';

const root = cva(
  [
    'text-base',
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
  ],
  {
    variants: {
      surface: {
        solid: 'bg-slate-800 text-white hover:bg-slate-700',
        outline: 'border border-slate-800 text-slate-800 hover:bg-slate-50',
        ghost: 'text-slate-800 hover:bg-slate-100',
        soft: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
      },
      size: {
        sm: 'text-sm h-8 px-4',
        md: 'text-base h-10 px-4',
        lg: 'text-lg h-12 px-4',
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      surface: 'solid',
      size: 'md',
      isDisabled: false,
    },
  },
);

const button = {
  root,
};

export default button;
