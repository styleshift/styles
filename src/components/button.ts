import styleshift from '../styleshift';
import { canFocus } from './partials/canFocus';
import { canDisable } from './partials/canDisable';

/**
 * Button - A flexible button component supporting multiple surfaces and sizes
 * with built-in focus and disabled states.
 *
 * @typedef {Object} ButtonProps
 * @property {('solid' | 'outline' | 'ghost' | 'soft')} [surface] - Button surface style
 * @property {('sm' | 'base' | 'md' | 'lg')} [size] - Button size variant
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - HTML button element props
 *
 * @example
 * ```tsx
 * // Basic button
 * <button className={button.root()}>
 *   Click me
 * </button>
 *
 * // Responsive button that changes size
 * <button className={button.root({
 *   size: {
 *     base: "sm",
 *     md: "base",
 *     lg: "lg"
 *   }
 * })}>
 *   Responsive Button
 * </button>
 *
 * // Common pattern: Primary action button
 * <button className={button.root({
 *   surface: "solid",
 *   size: "lg"
 * })}>
 *   Save Changes
 * </button>
 *
 * // Common pattern: Secondary action button
 * <button className={button.root({
 *   surface: "outline",
 *   size: "base"
 * })}>
 *   Cancel
 * </button>
 *
 * // Common pattern: Subtle action button
 * <button className={button.root({
 *   surface: "ghost",
 *   size: "sm"
 * })}>
 *   Learn More
 * </button>
 * ```
 *
 * @variant surface
 * - solid {'solid'} - High emphasis button with solid background
 * - outline {'outline'} - Medium emphasis button with border
 * - ghost {'ghost'} - Low emphasis button with hover effect
 * - soft {'soft'} - Subtle button with light background
 *
 * @variant size
 * - sm {'sm'} - Compact size (h-8, text-sm)
 * - base {'base'} - Default size (h-10, text-base)
 * - md {'md'} - Medium size (h-12, text-md)
 * - lg {'lg'} - Large size (h-14, text-lg)
 *
 * @default
 * - surface: "solid"
 * - size: "base"
 *
 * @see canFocus - Adds focus ring styles
 * @see canDisable - Handles disabled state styles
 *
 * @interface ButtonVariants
 * @property {('solid' | 'outline' | 'ghost' | 'soft')} [surface] - Button surface style
 * @property {('sm' | 'base' | 'md' | 'lg')} [size] - Button size variant
 *
 * @type {import('../styleshift').StyleshiftComponent<ButtonVariants>}
 */
export const button = {
  /**
   * Root styles for the button component
   *
   * @property {Object} variants - Style variants configuration
   * @property {('solid' | 'outline' | 'ghost' | 'soft')} variants.surface - Button surface style
   * @property {('sm' | 'base' | 'md' | 'lg')} variants.size - Button size variant
   *
   * @returns {string} Combined Tailwind CSS classes
   */
  root: styleshift.compose(
    canFocus,
    canDisable,
    styleshift.define({
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
      variants: {
        surface: {
          solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
          outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
          ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
          soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
        },
        size: {
          sm: 'text-sm h-8 px-4',
          base: 'text-base h-10 px-4',
          md: 'text-md h-12 px-5',
          lg: 'text-lg h-14 px-5',
        },
      },
      defaultVariants: {
        surface: 'solid',
        size: 'base',
      },
    }),
  ),
};
