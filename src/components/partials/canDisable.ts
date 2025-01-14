import styleshift from '../../styleshift';

export const canDisable = styleshift.define({
  base: [
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ],
});
