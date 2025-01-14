import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';

export const linkDocs = {
  root: {
    variants: {
      underline: ['true', 'false'],
    },
  },
};

export const link = {
  root: styleshift.compose(
    canFocus,
    styleshift.define({
      base: [
        'text-blue-700',
        'hover:text-blue-800',
        'inline-flex',
        'items-center',
        'justify-center',
        'gap-2',
        'rounded',
        'transition-all',
      ],
      variants: {
        underline: {
          true: 'underline',
          false: 'no-underline',
        },
      },
      defaultVariants: {
        underline: true,
      },
    }),
  ),
};
