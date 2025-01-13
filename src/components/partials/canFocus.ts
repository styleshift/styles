/**
 * Base focus styles for interactive elements using Tailwind classes.
 * @variant base - Applies focus ring with offset and slate color
 */
import styleshift from '../../styleshift';

export const canFocus = styleshift.define({
  base: ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'],
});
