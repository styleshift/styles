import { generic } from '../shared/base/index.js';

/**
 * StyleShift Card Styles
 */
export default {
  base: [...generic, 'flex', 'flex-col', 'bg-white', 'border', 'border-neutral-200', 'shadow-xs', 'rounded-md'],
  variants: {
    size: {
      tiny: ['p-2'],
      small: ['p-3'],
      default: ['p-4'],
      medium: ['p-5'],
      large: ['p-6'],
      huge: ['p-8'],
    },
    noBorder: {
      true: ['border-0 shadow-none'],
      false: ['border', 'border-neutral-200'],
    },
  },
  defaultVariants: {
    size: 'default',
    noBorder: false,
  },
  compoundVariants: [],
};
