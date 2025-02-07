import { cva, compose } from 'cva';
import { focus } from './focus';
import { disable } from './disable';

export const button = {
 root: compose(
  focus.root,
  disable.root,
  cva({
   base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-[500]',
    'rounded',
    'whitespace-nowrap',
    'transition-all',
    'border-2',
   ],
   variants: {
    surface: {
     solid: [
      'border-transparent bg-slate-800',
      'text-white',
      'hover:bg-slate-700',
     ],
     outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
     ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
     soft: [
      'border-transparent',
      'bg-slate-100',
      'text-slate-800',
      'hover:bg-slate-200',
     ],
    },
    size: {
     sm: 'text-sm h-8 px-4',
     base: 'text-base h-10 px-4',
     md: 'text-md h-12 px-5',
     lg: 'text-lg h-14 px-5',
    },
   },
   defaultVariants: {
    surface: 'solid',
    size: 'base',
   },
  }),
 ),
};
