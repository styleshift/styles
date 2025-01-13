import { cva, type VariantProps } from '../../shared';

export const canFocus = cva({
  base: ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'],
});

export type CanFocusVariants = VariantProps<typeof canFocus>;
