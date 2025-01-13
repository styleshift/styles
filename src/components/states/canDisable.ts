import { cva } from '../../shared';

export const canDisable = cva({
  base: ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'],
});
