'use strict';

var alert = {
 root: {
  base: ['flex', 'gap-4', 'p-4', 'rounded-md', 'border', 'transition-colors'],
  variants: {
   variant: {
    info: ['bg-blue-50', 'border-blue-200', 'text-blue-800'],
    success: ['bg-green-50', 'border-green-200', 'text-green-800'],
    warning: ['bg-yellow-50', 'border-yellow-200', 'text-yellow-800'],
    error: ['bg-red-50', 'border-red-200', 'text-red-800'],
   },
  },
  defaultVariants: {
   variant: 'info',
  },
 },
};

var alert$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: alert,
});

var button = {
 root: {
  base: [
   'inline-flex',
   'items-center',
   'justify-center',
   'gap-2',
   'font-[500]',
   'rounded',
   'whitespace-nowrap',
   'transition-all',
   'border-2',
  ],
  variants: {
   surface: {
    solid: [
     'border-transparent bg-slate-800',
     'text-white',
     'hover:bg-slate-700',
    ],
    outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
    ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
    soft: [
     'border-transparent',
     'bg-slate-100',
     'text-slate-800',
     'hover:bg-slate-200',
    ],
   },
   size: {
    sm: 'text-sm h-8 px-4',
    base: 'text-base h-10 px-4',
    md: 'text-md h-12 px-5',
    lg: 'text-lg h-14 px-5',
   },
  },
  defaultVariants: {
   surface: 'solid',
   size: 'base',
  },
 },
};

var button$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: button,
});

var card = {
 root: {
  base: ['transition-all border'],
  variants: {
   shadow: {
    true: 'shadow',
    false: '',
   },
   border: {
    true: 'border-slate-300',
    false: 'border-transparent',
   },
   rounded: {
    true: 'rounded-md',
    false: '',
   },
   space: {
    default: 'p-0',
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-8',
    xl: 'p-16',
   },
  },
  defaultVariants: {
   shadow: true,
   border: true,
   rounded: true,
   space: 'default',
  },
 },
 head: {
  base: ['border-b flex justify-between items-center'],
  variants: {
   space: {
    default: '',
    xs: 'px-2 pt-1',
    sm: 'px-4 pt-2',
    md: 'px-8 pt-4',
    lg: 'px-16 pt-8',
    xl: 'px-24 pt-16',
   },
   border: {
    true: 'border-slate-300',
    false: 'border-transparent',
   },
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
    class: 'pb-1',
   },
   {
    border: true,
    space: 'sm',
    class: 'pb-2',
   },
   {
    border: true,
    space: 'md',
    class: 'pb-4',
   },
   {
    border: true,
    space: 'lg',
    class: 'pb-8',
   },
   {
    border: true,
    space: 'xl',
    class: 'pb-16',
   },
  ],
 },
 body: {
  base: [''],
  variants: {
   space: {
    default: '',
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-8',
    xl: 'p-16',
   },
  },
  defaultVariants: {
   space: 'sm',
  },
 },
 foot: {
  base: ['border-t flex justify-between items-center'],
  variants: {
   space: {
    default: '',
    xs: 'px-2 pb-1',
    sm: 'px-4 pb-2',
    md: 'px-8 pb-4',
    lg: 'px-16 pb-8',
    xl: 'px-24 pb-16',
   },
   border: {
    true: 'border-slate-300',
    false: 'border-transparent',
   },
  },
  defaultVariants: {
   space: 'sm',
   border: true,
  },
  compoundVariants: [
   {
    border: true,
    space: 'default',
    class: '  ',
   },
   {
    border: true,
    space: 'xs',
    class: 'pt-1',
   },
   {
    border: true,
    space: 'sm',
    class: 'pt-2',
   },
   {
    border: true,
    space: 'md',
    class: 'pt-4',
   },
   {
    border: true,
    space: 'lg',
    class: 'pt-8',
   },
   {
    border: true,
    space: 'xl',
    class: 'pt-16',
   },
  ],
 },
};

var card$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: card,
});

var disable = {
 base: [
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
 ],
};

var disable$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: disable,
});

var focus = {
 base: [
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-slate-600',
 ],
};

var focus$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: focus,
});

var link = {
 root: {
  base: [
   'text-blue-700',
   'hover:text-blue-800',
   'inline-flex',
   'items-center',
   'justify-center',
   'gap-2',
   'rounded',
   'transition-all',
  ],
  variants: {
   underline: {
    true: 'underline',
    false: 'no-underline',
   },
  },
  defaultVariants: {
   underline: true,
  },
 },
};

var link$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: link,
});

var separator = {
 root: {
  base: ['shrink-0', 'border-0', 'transition-colors'],
  variants: {
   orientation: {
    horizontal: ['w-full', 'bg-slate-300'],
    vertical: ['h-full', 'bg-slate-300'],
   },
   size: {
    xs: [],
    sm: [],
    md: [],
    lg: [],
    xl: [],
   },
  },
  compoundVariants: [
   {
    orientation: 'horizontal',
    size: 'xs',
    class: ['h-px'],
   },
   {
    orientation: 'vertical',
    size: 'xs',
    class: ['w-px'],
   },
   {
    orientation: 'horizontal',
    size: 'sm',
    class: ['h-0.5'],
   },
   {
    orientation: 'vertical',
    size: 'sm',
    class: ['w-0.5'],
   },
   {
    orientation: 'horizontal',
    size: 'md',
    class: ['h-1'],
   },
   {
    orientation: 'vertical',
    size: 'md',
    class: ['w-1'],
   },
   {
    orientation: 'horizontal',
    size: 'lg',
    class: ['h-2'],
   },
   {
    orientation: 'vertical',
    size: 'lg',
    class: ['w-2'],
   },
   {
    orientation: 'horizontal',
    size: 'xl',
    class: ['h-4'],
   },
   {
    orientation: 'vertical',
    size: 'xl',
    class: ['w-4'],
   },
  ],
  defaultVariants: {
   orientation: 'horizontal',
   size: 'xs',
  },
 },
};

var separator$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: separator,
});

var text = {
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
};

var text$1 = /*#__PURE__*/ Object.freeze({
 __proto__: null,
 default: text,
});

exports.alert = alert$1;
exports.button = button$1;
exports.card = card$1;
exports.disable = disable$1;
exports.focus = focus$1;
exports.link = link$1;
exports.separator = separator$1;
exports.text = text$1;
