'use strict';

var classVarianceAuthority = require('class-variance-authority');

const focus = ['shared-visible:outline-none', 'shared-visible:ring-2', 'shared-visible:ring-offset-2'];

const rootDefaultVariants = {
    surface: 'solid',
    size: 'md',
    isDisabled: false,
};
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
    surface: rootSurfaces,
    size: rootSizes,
};
const button = classVarianceAuthority.cva(rootBase, {
    variants: rootVariants,
    defaultVariants: rootDefaultVariants,
});

exports.button = button;
