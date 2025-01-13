import { styleshift } from '../shared';
import { canFocus } from './partials/canFocus';

/**
 * Link component styling configuration using CVA (Class Variance Authority)
 * Combines focus styles with customizable link appearance
 */
export const link = {
  /**
   * Root styles for the link component
   * Composed of focus management and base link styles
   * @property {Object} variants - Available style variants
   * @property {Object} variants.underline - Controls text decoration
   * @property {boolean} defaultVariants.underline - Default is underlined (true)
   */
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
