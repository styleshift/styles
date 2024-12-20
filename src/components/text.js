import { generic } from '../shared/base/index.js';

/**
 * StyleShift Text Styles
 * =========================
 * | Variant         | Options                                              |
 * |-----------------|------------------------------------------------------|
 * | size            | tiny, small, default, medium, large, huge           |
 * | weight          | thin, normal, medium, semibold, bold                |
 * =========================
 * | Variant         | Default Value |
 * |-----------------|---------------|
 * | size            | default       |
 * | weight          | normal        |
 * =========================
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
