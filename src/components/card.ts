import { cva, type VariantProps } from '../shared';

const rootBase = ['transition-all'] as const;

const rootShadow = {
  true: 'shadow',
  false: '',
} as const;

const rootBorder = {
  true: 'border',
  false: '',
} as const;

const rootRounded = {
  true: 'rounded-md',
  false: '',
} as const;

const rootSizes = {
  default: '',
  xs: 'p-2',
  sm: 'p-4',
  md: 'p-8',
  lg: 'p-16',
  xl: 'p-24',
} as const;

export const card = {
  root: cva(rootBase, {
    variants: {
      shadow: rootShadow,
      border: rootBorder,
      rounded: rootRounded,
      size: rootSizes,
    },
    defaultVariants: {
      shadow: true,
      border: true,
      rounded: true,
      size: 'default',
    },
  }),
};

export type CardRootVariants = VariantProps<typeof card.root>;
