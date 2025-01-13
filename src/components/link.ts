import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';

/**
 * Link component style configuration using Styleshift
 *
 * Provides styles for interactive link elements with focus states and
 * customizable text decoration. Combines focus management with link-specific styling.
 *
 * @since 0.0.53
 *
 * @example
 * ```typescript
 * import { link } from '@styleshift/components';
 *
 * // Basic link with underline
 * const className = link.root({ underline: true });
 *
 * // Link with focus state and no underline
 * const className = link.root({
 *   underline: false,
 *   isFocused: true
 * });
 * ```
 *
 * @see {@link canFocus} for focus state handling
 */
export const link = {
  /**
   * Root styles for the link component
   *
   * @property {Object} variants - Style variants configuration
   * @property {boolean} variants.underline - Controls text decoration
   * @property {boolean} [isFocused] - Focus state from canFocus
   *
   * @returns {string} Combined Tailwind CSS classes
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
