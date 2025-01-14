'use strict';

function r(e) {
 var t,
  f,
  n = '';
 if ('string' == typeof e || 'number' == typeof e) n += e;
 else if ('object' == typeof e)
  if (Array.isArray(e)) {
   var o = e.length;
   for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
  } else for (f in e) e[f] && (n && (n += ' '), (n += f));
 return n;
}
function clsx() {
 for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++)
  (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
 return n;
}

/* Exports
  ============================================ */ const falsyToString = (
 value,
) => (typeof value === 'boolean' ? `${value}` : value === 0 ? '0' : value);
const defineConfig = (options) => {
 const cx = function () {
  for (
   var _len = arguments.length, inputs = new Array(_len), _key = 0;
   _key < _len;
   _key++
  ) {
   inputs[_key] = arguments[_key];
  }
  return clsx(inputs);
 };
 const cva = (config) => (props) => {
  var _config_compoundVariants;
  if (
   (config === null || config === undefined ? undefined : config.variants) ==
   null
  )
   return cx(
    config === null || config === undefined ? undefined : config.base,
    props === null || props === undefined ? undefined : props.class,
    props === null || props === undefined ? undefined : props.className,
   );
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
   const variantProp =
    props === null || props === undefined ? undefined : props[variant];
   const defaultVariantProp =
    defaultVariants === null || defaultVariants === undefined
     ? undefined
     : defaultVariants[variant];
   const variantKey =
    falsyToString(variantProp) || falsyToString(defaultVariantProp);
   return variants[variant][variantKey];
  });
  const defaultsAndProps = {
   ...defaultVariants,
   // remove `undefined` props
   ...(props &&
    Object.entries(props).reduce((acc, param) => {
     let [key, value] = param;
     return typeof value === 'undefined'
      ? acc
      : {
         ...acc,
         [key]: value,
        };
    }, {})),
  };
  const getCompoundVariantClassNames =
   config === null || config === undefined
    ? undefined
    : (_config_compoundVariants = config.compoundVariants) === null ||
        _config_compoundVariants === undefined
      ? undefined
      : _config_compoundVariants.reduce((acc, param) => {
         let { class: cvClass, className: cvClassName, ...cvConfig } = param;
         return Object.entries(cvConfig).every((param) => {
          let [cvKey, cvSelector] = param;
          const selector = defaultsAndProps[cvKey];
          return Array.isArray(cvSelector)
           ? cvSelector.includes(selector)
           : selector === cvSelector;
         })
          ? [...acc, cvClass, cvClassName]
          : acc;
        }, []);
  return cx(
   config === null || config === undefined ? undefined : config.base,
   getVariantClassNames,
   getCompoundVariantClassNames,
   props === null || props === undefined ? undefined : props.class,
   props === null || props === undefined ? undefined : props.className,
  );
 };
 const compose = function () {
  for (
   var _len = arguments.length, components = new Array(_len), _key = 0;
   _key < _len;
   _key++
  ) {
   components[_key] = arguments[_key];
  }
  return (props) => {
   const propsWithoutClass = Object.fromEntries(
    Object.entries(props || {}).filter((param) => {
     let [key] = param;
     return !['class', 'className'].includes(key);
    }),
   );
   return cx(
    components.map((component) => component(propsWithoutClass)),
    props === null || props === undefined ? undefined : props.class,
    props === null || props === undefined ? undefined : props.className,
   );
  };
 };
 return {
  compose,
  cva,
  cx,
 };
};
const { compose, cva, cx } = defineConfig();

const generateDocsFromStyles = (styles) => {
 const docs = {};
 for (const [partName, partStyles] of Object.entries(styles)) {
  docs[partName] = {
   variants: partStyles.variants
    ? Object.fromEntries(
       Object.entries(partStyles.variants).map(
        ([variantName, variantOptions]) => [
         variantName,
         Object.keys(variantOptions),
        ],
       ),
      )
    : {},
  };
 }
 return docs;
};
const styleshift = {
 define: cva,
 compose: compose,
 merge: cx,
 docs: generateDocsFromStyles,
};

var focusStyles = {
 base: [
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-slate-600',
 ],
};

const canFocus = styleshift.define(focusStyles);

var disableStyles = {
 base: [
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
 ],
};

const canDisable = styleshift.define(disableStyles);

var buttonStyles = {
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

const button = {
 root: styleshift.compose(
  canFocus,
  canDisable,
  styleshift.define(buttonStyles.root),
 ),
};
const buttonDocs = styleshift.docs(buttonStyles);

var cardStyles = {
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

const card = {
 root: styleshift.define(cardStyles.root),
 head: styleshift.define(cardStyles.head),
 body: styleshift.define(cardStyles.body),
 foot: styleshift.define(cardStyles.foot),
};
const cardDocs = styleshift.docs(cardStyles);

var linkStyles = {
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

const link = {
 root: styleshift.compose(canFocus, styleshift.define(linkStyles.root)),
};
const linkDocs = styleshift.docs(linkStyles);

var textStyles = {
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

const text = {
 root: styleshift.define(textStyles.root),
};
const textDocs = styleshift.docs(textStyles);

var separatorStyles = {
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

const separator = {
 root: styleshift.define(separatorStyles.root),
};
const separatorDocs = styleshift.docs(separatorStyles);

var alertStyles = {
 root: {
  base: ['relative', 'w-full', 'rounded-lg', 'border', 'p-4', 'transition-all'],
  variants: {
   surface: {
    default: ['border-slate-500', 'text-slate-800'],
    negative: ['border-red-500', 'text-red-800'],
    positive: ['border-green-500', 'text-green-800'],
   },
  },
  defaultVariants: {
   surface: 'default',
  },
 },
 title: {
  base: ['mb-1', 'font-medium', 'leading-none', 'tracking-tight'],
 },
 description: {
  base: ['text-sm', 'opacity-90'],
 },
};

const alertDocs = styleshift.docs(alertStyles);
const alert = {
 root: styleshift.define(alertStyles.root),
 title: styleshift.define(alertStyles.title),
 description: styleshift.define(alertStyles.description),
};

exports.alert = alert;
exports.alertDocs = alertDocs;
exports.alertStyles = alertStyles;
exports.button = button;
exports.buttonDocs = buttonDocs;
exports.buttonStyles = buttonStyles;
exports.card = card;
exports.cardDocs = cardDocs;
exports.cardStyles = cardStyles;
exports.link = link;
exports.linkDocs = linkDocs;
exports.linkStyles = linkStyles;
exports.separator = separator;
exports.separatorDocs = separatorDocs;
exports.separatorStyles = separatorStyles;
exports.text = text;
exports.textDocs = textDocs;
exports.textStyles = textStyles;
