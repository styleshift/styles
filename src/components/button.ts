import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';
import { canDisable } from './partials/canDisable';

/**
 * Button component style configuration
 * @description Defines the styling variants and composition for the button component
 */
export const button = {
  /**
   * Root styles for the button component
   * Composes focus and disable states with core button styles
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
