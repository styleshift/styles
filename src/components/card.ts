import styleshift from '../styleshift';

export const cardDocs = {
  root: {
    variants: {
      shadow: ['true', 'false'],
      border: ['true', 'false'],
      rounded: ['true', 'false'],
      space: ['default', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  head: {
    variants: {
      space: ['default', 'xs', 'sm', 'md', 'lg', 'xl'],
      border: ['true', 'false'],
    },
  },
  body: {
    variants: {
      space: ['default', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  foot: {
    variants: {
      space: ['default', 'xs', 'sm', 'md', 'lg', 'xl'],
      border: ['true', 'false'],
    },
  },
};

export const card = {
  root: styleshift.define({
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
  }),

  head: styleshift.define({
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
  }),

  body: styleshift.define({
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
  }),

  foot: styleshift.define({
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
  }),
};
