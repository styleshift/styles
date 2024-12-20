import focusable from '../shared/base/focusable.js';
import { isDisabled } from '../shared/variants/index.js';
import disableAnimation from '../shared/variants/disableAnimation.js';
import { generic } from '../shared/base/index.js';

/**
 * Link Component
 * ==================================================
 * | Variant         | Options                                                     |
 * |-----------------|-------------------------------------------------------------|
 * | isDisabled      | boolean*                                                   |
 * | disableAnimation| boolean*                                                   |
 * | size            | tiny, small, default*, medium, large, huge                 |
 * | color           | primary*, secondary, success, danger, warning              |
 * | underline       | none, hover*, always                                       |
 * ==================================================
 * * = default value
 *
 * Interactive text link with configurable styles and states.
 *
 * @requires {module} shared/base - focusable, generic
 * @requires {module} shared/variants - isDisabled, disableAnimation
 */
export default {
  base: [
    ...generic,
    ...focusable,
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'outline-none',
    'select-none',
    'text-current',
    'no-underline',
    'tap-highlight-transparent',
    ...focusable,
  ],
  variants: {
    isDisabled,
    disableAnimation,
    size: {
      tiny: 'text-xs',
      small: 'text-sm',
      default: 'text-base',
      medium: 'text-md',
      large: 'text-lg',
      huge: 'text-xl',
    },
    color: {
      primary: ['text-primary-600', 'hover:text-primary-700'],
      secondary: ['text-secondary-600', 'hover:text-secondary-700'],
      success: ['text-positive-600', 'hover:text-positive-700'],
      danger: ['text-negative-600', 'hover:text-negative-700'],
      warning: ['text-warning-600', 'hover:text-warning-700'],
    },
    underline: {
      none: 'no-underline',
      hover: 'no-underline hover:underline',
      always: 'underline',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'primary',
    underline: 'hover',
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [],
};
