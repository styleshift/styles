import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';
import { canDisable } from './partials/canDisable';

/**
 * Button component style configuration using Styleshift
 *
 * Provides a comprehensive set of styles and variants for button components,
 * including different surfaces, sizes, and states (focus, disabled).
 *
 * @since 0.0.53
 *
 * @example
 * ```typescript
 * import { button } from '@styleshift/components';
 *
 * // Basic usage
 * const className = button.root({ surface: 'solid', size: 'md' });
 *
 * // With focus and disabled states
 * const className = button.root({
 *   surface: 'outline',
 *   size: 'base',
 *   isFocused: true,
 *   isDisabled: false
 * });
 * ```
 *
 * @see {@link canFocus} for focus state handling
 * @see {@link canDisable} for disabled state handling
 */
export const button = {
  /**
   * Root styles for the button component
   * Composes focus and disable states with core button styles
   *
   * @property {Object} variants - Style variants configuration
   * @property {('solid'|'outline'|'ghost'|'soft')} variants.surface - Button appearance variant
   * @property {('sm'|'base'|'md'|'lg')} variants.size - Button size variant
   * @property {boolean} [isFocused] - Focus state from canFocus
   * @property {boolean} [isDisabled] - Disabled state from canDisable
   *
   * @returns {string} Combined Tailwind CSS classes
   */
  root: styleshift.compose(
    canFocus,
    canDisable,
    styleshift.define({
      /**
       * Base styles applied to all button variants
       */
      base: [
        'inline-flex',
        'items-center',
        'justify-center',
        'gap-2',
        'font-[500]',
        'rounded',
        'whitespace-nowrap',
        'transition-all',
        'border-2',
      ],
      /**
       * Style variants for different button appearances
       */
      variants: {
        /**
         * Surface variants define the button's visual style
         * - solid: Filled background with white text
         * - outline: Bordered button with transparent background
         * - ghost: Text-only button with hover background
         * - soft: Light background with dark text
         */
        surface: {
          solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
          outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
          ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
          soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
        },
        /**
         * Size variants define the button's dimensions and text size
         */
        size: {
          sm: 'text-sm h-8 px-4',
          base: 'text-base h-10 px-4',
          md: 'text-md h-12 px-5',
          lg: 'text-lg h-14 px-5',
        },
      },
      /**
       * Default variant values if none are specified
       */
      defaultVariants: {
        surface: 'solid',
        size: 'base',
      },
    }),
  ),
};
