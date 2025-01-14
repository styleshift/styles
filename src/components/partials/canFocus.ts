import styleshift from '../../styleshift';

export const canFocus = styleshift.define({
  base: [
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-slate-600',
  ],
});
