'use strict';

var classVarianceAuthority = require('class-variance-authority');

const focus = ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'];
const disabled = ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'];

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
];
const rootSurfaces = {
    solid: ['bg-slate-800', 'text-white', 'hover:bg-slate-700'],
    outline: ['border', 'border-slate-800', 'text-slate-800', 'hover:bg-slate-50'],
    ghost: ['text-slate-800', 'hover:bg-slate-100'],
    soft: ['bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
};
const rootSizes = {
    sm: 'text-sm h-8 px-4',
    md: 'text-base h-10 px-4',
    lg: 'text-lg h-12 px-4',
};
const rootDisabled = {
    true: [],
    false: [],
};
const button = classVarianceAuthority.cva(rootBase, {
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

exports.button = button;
