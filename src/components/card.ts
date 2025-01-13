import { cva, type VariantProps } from '../shared';

const rootBase = ['transition-all border'] as const;

const headBase = ['border-b'] as const;
const bodyBase = [''] as const;
const footBase = ['border-t'] as const;

const rootShadow = {
  true: 'shadow',
  false: '',
} as const;

const rootBorder = {
  true: 'border-slate-200',
  false: 'border-transparent',
} as const;

const rootRounded = {
  true: 'rounded-md',
  false: '',
} as const;

const HeadBorder = {
  true: 'border-slate-200',
  false: 'border-transparent',
} as const;

const FootBorder = {
  true: 'border-slate-200',
  false: 'border-transparent',
} as const;

const rootSpaces = {
  default: '',
  xs: 'p-2',
  sm: 'p-4',
  md: 'p-8',
  lg: 'p-16',
  xl: 'p-24',
} as const;

const headSpaces = {
  default: '',
  xs: 'px-2 pt-2',
  sm: 'px-4 pt-4',
  md: 'px-8 pt-8',
  lg: 'px-16 pt-16',
  xl: 'px-24 pt-24',
} as const;

const bodySpaces = {
  default: '',
  xs: 'p-2',
  sm: 'p-4',
  md: 'p-8',
  lg: 'p-16',
  xl: 'p-24',
} as const;

const footSpaces = {
  default: '',
  xs: 'px-2 pb-2',
  sm: 'px-4 pb-4',
  md: 'px-8 pb-8',
  lg: 'px-16 pb-16',
  xl: 'px-24 pb-24',
} as const;

export const card = {
  root: cva({
    base: rootBase,
    variants: {
      shadow: rootShadow,
      border: rootBorder,
      rounded: rootRounded,
      space: rootSpaces,
    },
    defaultVariants: {
      shadow: true,
      border: true,
      rounded: true,
      space: 'default',
    },
  }),
  head: cva({
    base: headBase,
    variants: {
      space: headSpaces,
      border: HeadBorder,
    },
    defaultVariants: {
      space: 'sm',
      border: true,
    },
    compoundVariants: [
      {
        border: true,
        space: 'default',
        class: '',
      },
      {
        border: true,
        space: 'xs',
        class: 'pb-2',
      },
      {
        border: true,
        space: 'sm',
        class: 'pb-4',
      },
      {
        border: true,
        space: 'lg',
        class: 'pb-16',
      },
      {
        border: true,
        space: 'xl',
        class: 'pb-24',
      },
    ],
  }),
  body: cva({
    base: bodyBase,
    variants: {
      space: bodySpaces,
    },
    defaultVariants: {
      space: 'sm',
    },
  }),
  foot: cva({
    base: footBase,
    variants: {
      space: footSpaces,
      border: FootBorder,
    },
    defaultVariants: {
      space: 'sm',
      border: true,
    },
    compoundVariants: [
      {
        border: true,
        space: 'default',
        class: '',
      },
      {
        border: true,
        space: 'xs',
        class: 'pt-2',
      },
      {
        border: true,
        space: 'sm',
        class: 'pt-4',
      },
      {
        border: true,
        space: 'lg',
        class: 'pt-16',
      },
      {
        border: true,
        space: 'xl',
        class: 'pt-24',
      },
    ],
  }),
};
