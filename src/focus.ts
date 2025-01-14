import { cva } from 'cva';

export const focusStyles = {
 root: cva({
  base: [
   'focus:outline-none',
   'focus:ring-2',
   'focus:ring-offset-2',
   'focus:ring-slate-600',
  ],
 }),
};
