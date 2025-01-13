import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';

/**
 * Configurable link component with focus management and styling options
 *
 * @param {Object} options
 * @param {boolean} [options.underline=true] - Controls text decoration
 * @returns {string} Tailwind CSS class string
 *
 * @example
 * ```tsx
 * // Basic link
 * <a href="#" className={link.root()}>
 *   Learn more
 * </a>
 *
 * // Link without underline and icon
 * <a href="#" className={link.root({ underline: false })}>
 *   Documentation <Icon name="external-link" />
 * </a>
 * ```
 *
 * @variant underline
 * - true: Adds underline decoration
 * - false: Removes underline decoration
 */
export const link = {
  /**
   * Root styles for the link component
   *
   * @property {Object} variants - Style variants configuration
   * @property {boolean} variants.underline - Controls text decoration
   *
   * @example
   * ```tsx
   * // Basic navigation link
   * <a href="/about" className={link.root()}>
   *   About us
   * </a>
   *
   * // Action link with icon
   * <a href="/settings" className={link.root({ underline: false })}>
   *   Settings <Icon name="gear" />
   * </a>
   * ```
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
