import { cva, compose } from '../shared';
import { canFocus } from './states/canFocus';

const rootBase = [
  'text-blue-700',
  'hover:text-blue-800',
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'rounded',
  'transition-all',
] as const;

const rootUnderline = {
  true: 'underline',
  false: 'no-underline',
} as const;

export const link = {
  root: compose(
    canFocus,
    cva({
      base: rootBase,
      variants: {
        underline: rootUnderline,
      },
      defaultVariants: {
        underline: true,
      },
    }),
  ),
};
