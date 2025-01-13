import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';

/**
 * Link - A flexible link component with focus management and styling options
 * for creating accessible and interactive navigation elements.
 *
 * @typedef {Object} LinkProps
 * @property {boolean} [underline] - Controls text decoration
 * @property {React.HTMLAttributes<HTMLAnchorElement>} [props] - HTML anchor element props
 *
 * @example
 * ```tsx
 * // Basic link
 * <a href="#" className={link.root()}>
 *   Learn more
 * </a>
 *
 * // Responsive link with icon
 * <a href="#" className={link.root({
 *   underline: {
 *     base: false,
 *     hover: true
 *   }
 * })}>
 *   Documentation <Icon name="external-link" />
 * </a>
 *
 * // Common pattern: Navigation link
 * <a href="/about" className={link.root()}>
 *   About us
 * </a>
 *
 * // Common pattern: Action link
 * <a href="/settings" className={link.root({
 *   underline: false
 * })}>
 *   Settings <Icon name="gear" />
 * </a>
 * ```
 *
 * @variant underline
 * - true {boolean} - Adds underline decoration
 * - false {boolean} - Removes underline decoration
 *
 * @default
 * - underline: true
 *
 * @see canFocus - Adds focus ring styles
 *
 * @interface LinkVariants
 * @property {boolean} [underline] - Controls text decoration
 *
 * @type {import('../styleshift').StyleshiftComponent<LinkVariants>}
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
