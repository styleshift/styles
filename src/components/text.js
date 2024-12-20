import { generic } from '../shared/base/index.js';

/**
 * Text Component
 * ==================================================
 * | Variant         | Options                                                     |
 * |-----------------|-------------------------------------------------------------|
 * | size            | tiny, small, default*, medium, large, huge                 |
 * | weight          | thin, normal*, medium, semibold, bold                      |
 * ==================================================
 * * = default value
 *
 * Basic typography component with configurable size and weight.
 *
 * @requires {module} shared/base - generic
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
