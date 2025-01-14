import { cva } from 'cva';

export const card = {
 root: cva({
  base: ['rounded-lg border bg-card text-card-foreground shadow-sm'],
  variants: {
   space: {
    default: 'p-0',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-16',
    xl: 'p-24',
   },
  },
  defaultVariants: {
   space: 'default',
  },
 }),
 head: cva({
  base: [' flex justify-between items-center'],
  variants: {
   space: {
    default: 'p-2',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-16',
    xl: 'p-24',
   },
  },
  defaultVariants: {
   space: 'default',
  },
 }),
 body: cva({
  base: [],
  variants: {
   space: {
    default: 'p-2',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-16',
    xl: 'p-24',
   },
  },
  defaultVariants: {
   space: 'default',
  },
 }),
 foot: cva({
  base: ['flex justify-between items-center'],
  variants: {
   space: {
    default: 'p-2',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-16',
    xl: 'p-24',
   },
  },
  defaultVariants: {
   space: 'default',
  },
 }),
};
