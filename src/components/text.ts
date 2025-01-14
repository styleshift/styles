import styleshift from '../styleshift';

const textStyles = {
 root: {
  base: ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'],
  variants: {
   size: {
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
   },
   align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
    start: 'text-start',
    end: 'text-end',
   },
   strike: {
    none: '',
    under: 'underline',
    over: 'overline',
    through: 'line-through',
   },
   weight: {
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
   },
   case: {
    default: '',
    upper: 'uppercase',
    lower: 'lowercase',
    caps: 'capitalize',
    normal: 'normal-case',
   },
   wrap: {
    default: '',
    wrap: 'text-wrap',
    nowrap: 'text-nowrap',
    balance: 'text-balance',
    pretty: 'text-pretty',
   },
   whitespace: {
    default: '',
    normal: 'whitespace-normal',
    nowrap: 'whitespace-nowrap',
    pre: 'whitespace-pre',
    preline: 'whitespace-pre-line',
    prewrap: 'whitespace-pre-wrap',
    break: 'whitespace-break-spaces',
   },
   leading: {
    default: '',
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
   },
   tracking: {
    default: '',
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
   },
   truncate: {
    true: ['truncate'],
    false: [''],
   },
   dimmed: {
    true: ['opacity-65'],
    false: ['opacity-100'],
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
   leading: 'default',
   tracking: 'default',
   truncate: false,
   dimmed: false,
  },
 },
} as const;

const text = {
 root: styleshift.define(textStyles.root),
};

const textDocs = styleshift.docs(textStyles);

export { text, textDocs, textStyles };
