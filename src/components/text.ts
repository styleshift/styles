import { cva, type VariantProps } from '../shared';

const rootBase = ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'] as const;

const rootSizes = {
  default: '',
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
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

const rootLeading = {
  default: '',
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
} as const;

const rootTracking = {
  default: '',
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const;

const rootDimmed = {
  true: ['opacity-65'],
  false: ['opacity-100'],
};

const rootTruncate = {
  true: ['truncate'],
  false: [''],
};

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
      leading: rootLeading,
      tracking: rootTracking,
      truncate: rootTruncate,
      dimmed: rootDimmed,
    },
    defaultVariants: {
      size: 'default',
      align: 'left',
      strike: 'none',
      weight: 'default',
      case: 'default',
      wrap: 'default',
      whitespace: 'default',
      leading: 'default',
      tracking: 'default',
      truncate: false,
      dimmed: false,
    },
  }),
};

export type TextRootVariants = VariantProps<typeof text.root>;
