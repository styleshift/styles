import { cva } from 'cva';

export const alert = {
 root: cva({
  base: ['flex', 'gap-4', 'p-4', 'rounded-md', 'border', 'transition-colors'],
  variants: {
   surface: {
    info: ['bg-blue-50', 'border-blue-200', 'text-blue-800'],
    success: ['bg-green-50', 'border-green-200', 'text-green-800'],
    warning: ['bg-yellow-50', 'border-yellow-200', 'text-yellow-800'],
    error: ['bg-red-50', 'border-red-200', 'text-red-800'],
   },
  },
  defaultVariants: {
   surface: 'info',
  },
 }),
};
