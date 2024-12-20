import { generic } from '../shared/base/index.js';

/**
 * StyleShift Text Styles
 */
export default {
  base: [...generic, 'text-current', 'no-underline'],
  variants: {
    size: {
      tiny: 'text-xs',
      small: 'text-sm',
      default: 'text-base',
      medium: 'text-md',
      large: 'text-lg',
      huge: 'text-xl',
    },
    weight: {
      thin: 'font-thin',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'default',
    weight: 'normal',
  },
  compoundVariants: [],
};
