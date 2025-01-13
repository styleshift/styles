import styleshift from '../styleshift';

export const separator = {
  root: styleshift.define({
    base: ['shrink-0', 'border-0', 'transition-colors'],
    variants: {
      orientation: {
        horizontal: ['h-[1px]', 'w-full', 'bg-slate-200'],
        vertical: ['h-full', 'w-[1px]', 'bg-slate-200'],
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }),
};
