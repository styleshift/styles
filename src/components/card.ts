import { cva, type VariantProps } from '../shared';

const rootBase = ['p-4', 'transition-all'] as const;

export const card = {
  root: cva(rootBase, {
    variants: {
      shadow: {
        true: 'shadow',
        false: '',
      },
      border: {
        true: 'border',
        false: '',
      },
      rounded: {
        true: 'rounded-md',
        false: '',
      },
    },
    defaultVariants: {
      shadow: true,
      border: true,
      rounded: true,
    },
  }),
};

export type CardRootVariants = VariantProps<typeof card.root>;
