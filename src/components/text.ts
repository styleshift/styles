import { cva, type VariantProps } from '../shared';

const rootBase = ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'] as const;

const rootSizes = {
  default: '',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
} as const;

const rootAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
  start: 'text-start',
  end: 'text-end',
} as const;

const rootStrikes = {
  none: '',
  under: 'underline',
  over: 'overline',
  through: 'line-through',
} as const;

const rootWeights = {
  default: '',
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
} as const;

const rootCases = {
  default: '',
  upper: 'uppercase',
  lower: 'lowercase',
  caps: 'capitalize',
  normal: 'normal-case',
} as const;

export const text = {
  root: cva(rootBase, {
    variants: {
      size: rootSizes,
      align: rootAlign,
      strike: rootStrikes,
      weight: rootWeights,
      case: rootCases,
    },
    defaultVariants: {
      size: 'default',
      align: 'left',
      strike: 'none',
      weight: 'default',
      case: 'default',
    },
  }),
};

export type TextRootVariants = VariantProps<typeof text.root>;
