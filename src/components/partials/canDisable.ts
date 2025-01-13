/**
 * Applies standard disabled state styles to elements
 * @variant base - Reduces opacity, shows not-allowed cursor, and prevents pointer events
 */
import styleshift from '../../styleshift';

export const canDisable = styleshift.define({
  base: ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'],
});
