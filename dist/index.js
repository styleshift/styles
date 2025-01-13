import * as cvaRoot from 'class-variance-authority';

/**
 * Shared styles
 */
const focus = ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'];
const disabled = ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'];
/**
 * Helpers
 */
const cva = cvaRoot.cva;

const rootBase$3 = [
    ...focus,
    ...disabled,
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-[500]',
    'rounded',
    'whitespace-nowrap',
    'transition-all',
    'border-2',
];
const rootSurfaces = {
    solid: ['border-transparent bg-slate-800', 'text-white', 'hover:bg-slate-700'],
    outline: ['border-slate-800', 'text-slate-800', 'hover:border-slate-700'],
    ghost: ['border-transparent', 'text-slate-800', 'hover:bg-slate-100'],
    soft: ['border-transparent', 'bg-slate-100', 'text-slate-800', 'hover:bg-slate-200'],
};
const rootSizes$1 = {
    sm: 'text-sm h-8 px-4',
    base: 'text-base h-10 px-4',
    md: 'text-md h-12 px-5',
    lg: 'text-lg h-14 px-5',
};
const button = {
    root: cva(rootBase$3, {
        variants: {
            surface: rootSurfaces,
            size: rootSizes$1,
        },
        defaultVariants: {
            surface: 'solid',
            size: 'base',
        },
    }),
};

const rootBase$2 = ['transition-all'];
const headBase = ['border-b'];
const bodyBase = [''];
const footBase = ['border-t'];
const rootShadow = {
    true: 'shadow',
    false: '',
};
const rootBorder = {
    true: 'border',
    false: '',
};
const rootRounded = {
    true: 'rounded-md',
    false: '',
};
const spaces = {
    default: '',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-16',
    xl: 'p-24',
};
const card = {
    root: cva(rootBase$2, {
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
        },
        defaultVariants: {
            space: 'sm',
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
        },
        defaultVariants: {
            space: 'sm',
        },
    }),
};

const rootBase$1 = [
    ...focus,
    'text-blue-700',
    'hover:text-blue-800',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded',
    'transition-all',
];
const rootUnderline = {
    true: 'underline',
    false: 'no-underline',
};
const link = {
    root: cva(rootBase$1, {
        variants: {
            underline: rootUnderline,
        },
        defaultVariants: {
            underline: true,
        },
    }),
};

const rootBase = ['text-slate-800', 'font-sans', 'antialiased', 'transition-all'];
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
};
const rootAligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
    start: 'text-start',
    end: 'text-end',
};
const rootStrikes = {
    none: '',
    under: 'underline',
    over: 'overline',
    through: 'line-through',
};
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
};
const rootCases = {
    default: '',
    upper: 'uppercase',
    lower: 'lowercase',
    caps: 'capitalize',
    normal: 'normal-case',
};
const rootWraps = {
    default: '',
    wrap: 'text-wrap',
    nowrap: 'text-nowrap',
    balance: 'text-balance',
    pretty: 'text-pretty',
};
const rootWhitespaces = {
    default: '',
    normal: 'whitespace-normal',
    nowrap: 'whitespace-nowrap',
    pre: 'whitespace-pre',
    preline: 'whitespace-pre-line',
    prewrap: 'whitespace-pre-wrap',
    break: 'whitespace-break-spaces',
};
const rootLeading = {
    default: '',
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
};
const rootTracking = {
    default: '',
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
};
const rootDimmed = {
    true: ['opacity-65'],
    false: ['opacity-100'],
};
const rootTruncate = {
    true: ['truncate'],
    false: [''],
};
const text = {
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

export { button, card, link, text };
