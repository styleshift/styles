import { cva } from 'cva';

export const disable = {
 root: cva({
  base: [
   'disabled:opacity-50',
   'disabled:cursor-not-allowed',
   'disabled:pointer-events-none',
  ],
 }),
};
