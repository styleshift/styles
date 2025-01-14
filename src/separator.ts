import { cva } from 'cva';

export const separatorStyles = {
 root: cva({
  base: ['shrink-0', 'border-0', 'transition-colors'],
  variants: {
   orientation: {
    horizontal: ['w-full', 'bg-slate-300'],
    vertical: ['h-full', 'bg-slate-300'],
   },
   size: {
    xs: [],
    sm: [],
    md: [],
    lg: [],
    xl: [],
   },
  },
  compoundVariants: [
   {
    orientation: 'horizontal',
    size: 'xs',
    class: ['h-px'],
   },
   {
    orientation: 'vertical',
    size: 'xs',
    class: ['w-px'],
   },
   {
    orientation: 'horizontal',
    size: 'sm',
    class: ['h-0.5'],
   },
   {
    orientation: 'vertical',
    size: 'sm',
    class: ['w-0.5'],
   },
   {
    orientation: 'horizontal',
    size: 'md',
    class: ['h-1'],
   },
   {
    orientation: 'vertical',
    size: 'md',
    class: ['w-1'],
   },
   {
    orientation: 'horizontal',
    size: 'lg',
    class: ['h-2'],
   },
   {
    orientation: 'vertical',
    size: 'lg',
    class: ['w-2'],
   },
   {
    orientation: 'horizontal',
    size: 'xl',
    class: ['h-4'],
   },
   {
    orientation: 'vertical',
    size: 'xl',
    class: ['w-4'],
   },
  ],
  defaultVariants: {
   orientation: 'horizontal',
   size: 'xs',
  },
 }),
};
