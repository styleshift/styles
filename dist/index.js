import { cva } from 'class-variance-authority';

const focus = ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'];
const disabled = ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'];

const rootBase$2 = [
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
];
const rootSurfaces = {
    solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
    outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
    ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
    soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
};
const rootSizes$2 = {
    sm: 'text-sm h-8 px-4',
    base: 'text-base h-10 px-4',
    md: 'text-md h-12 px-5',
    lg: 'text-lg h-14 px-5',
};
const rootDisabled = {
    true: [],
    false: [],
};
const button = {
    root: cva(rootBase$2, {
        variants: {
            surface: rootSurfaces,
            size: rootSizes$2,
            isDisabled: rootDisabled,
        },
        defaultVariants: {
            surface: 'solid',
            size: 'base',
            isDisabled: false,
        },
    }),
};

const rootBase$1 = [
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
];
const rootSizes$1 = {
    default: '',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-md',
    lg: 'text-lg',
};
const link = {
    root: cva(rootBase$1, {
        variants: {
            size: rootSizes$1,
        },
        defaultVariants: {
            size: 'default',
        },
    }),
};

const rootBase = ['text-slate-800', 'transition-all'];
const rootSizes = {
    default: '',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-md',
    lg: 'text-lg',
};
const text = {
    root: cva(rootBase, {
        variants: {
            size: rootSizes,
        },
        defaultVariants: {
            size: 'default',
        },
    }),
};

export { button, link, text };
