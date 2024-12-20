/**
 * StyleShift Button Dock Styles
 * =========================
 * | Variant         | Options                                                    |
 * |-----------------|-------------------------------------------------------------|
 * | spacing         | none, tiny, small, default (default), medium, large, huge   |
 * =========================
 */
export default {
  base: ['flex', 'flex-col', 'justify-center', 'w-full', '*:w-full', 'items-center'],
  variants: {
    spacing: {
      none: 'gap-0',
      tiny: 'gap-0.5',
      small: 'gap-1',
      default: 'gap-2',
      medium: 'gap-3',
      large: 'gap-4',
      huge: 'gap-6',
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
};
