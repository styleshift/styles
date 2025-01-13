import { cva, type VariantProps } from '../shared';

const rootBase = ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'] as const;

const rootSizes = {
  default: '',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
} as const;

const rootAligns = {
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

const rootWraps = {
  default: '',
  wrap: 'text-wrap',
  nowrap: 'text-nowrap',
  balance: 'text-balance',
  pretty: 'text-pretty',
} as const;

const rootWhitespaces = {
  default: '',
  normal: 'whitespace-normal',
  nowrap: 'whitespace-nowrap',
  pre: 'whitespace-pre',
  preline: 'whitespace-pre-line',
  prewrap: 'whitespace-pre-wrap',
  break: 'whitespace-break-spaces',
} as const;

export const text = {
  root: cva(rootBase, {
    variants: {
      size: rootSizes,
      align: rootAligns,
      strike: rootStrikes,
      weight: rootWeights,
      case: rootCases,
      wrap: rootWraps,
      whitespace: rootWhitespaces,
      truncate: {
        true: ['truncate'],
        false: [''],
      },
    },
    defaultVariants: {
      size: 'default',
      align: 'left',
      strike: 'none',
      weight: 'default',
      case: 'default',
      wrap: 'default',
      whitespace: 'default',
      truncate: false,
    },
  }),
};

export type TextRootVariants = VariantProps<typeof text.root>;
