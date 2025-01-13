import { cva, type VariantProps } from '../shared';

const rootBase = ['transition-all'] as const;

const headBase = ['border-b'] as const;
const bodyBase = [''] as const;
const footBase = ['border-t'] as const;

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

const HeadBorder = {
  true: 'border-b',
  false: '',
} as const;

const FootBorder = {
  true: 'border-t',
  false: '',
} as const;

const spaces = {
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
      space: spaces,
    },
    defaultVariants: {
      shadow: true,
      border: true,
      rounded: true,
      space: 'default',
    },
  }),
  head: cva(headBase, {
    variants: {
      space: spaces,
      border: HeadBorder,
    },
    defaultVariants: {
      space: 'sm',
      border: true,
    },
  }),
  body: cva(bodyBase, {
    variants: {
      space: spaces,
    },
    defaultVariants: {
      space: 'sm',
    },
  }),
  foot: cva(footBase, {
    variants: {
      space: spaces,
      border: FootBorder,
    },
    defaultVariants: {
      space: 'sm',
      border: false,
    },
  }),
};

export type CardRootVariants = VariantProps<typeof card.root>;
export type CardHeadVariants = VariantProps<typeof card.head>;
export type CardBodyVariants = VariantProps<typeof card.body>;
export type CardFootVariants = VariantProps<typeof card.foot>;
