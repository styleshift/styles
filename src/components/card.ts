import { cva } from '../shared';

export const card = {
  root: cva({
    base: ['transition-all border'],
    variants: {
      shadow: {
        true: 'shadow',
        false: '',
      },
      border: {
        true: 'border-slate-200',
        false: 'border-transparent',
      },
      rounded: {
        true: 'rounded-md',
        false: '',
      },
      space: {
        default: '',
        xs: 'p-2',
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-16',
        xl: 'p-24',
      },
    },
    defaultVariants: {
      shadow: true,
      border: true,
      rounded: true,
      space: 'default',
    },
  }),
  head: cva({
    base: ['border-b'],
    variants: {
      space: {
        default: '',
        xs: 'px-2 pt-2',
        sm: 'px-4 pt-4',
        md: 'px-8 pt-8',
        lg: 'px-16 pt-16',
        xl: 'px-24 pt-24',
      },
      border: {
        true: 'border-slate-200',
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
    base: [''],
    variants: {
      space: {
        default: '',
        xs: 'p-2',
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-16',
        xl: 'p-24',
      },
    },
    defaultVariants: {
      space: 'sm',
    },
  }),
  foot: cva({
    base: ['border-t'],
    variants: {
      space: {
        default: '',
        xs: 'px-2 pb-2',
        sm: 'px-4 pb-4',
        md: 'px-8 pb-8',
        lg: 'px-16 pb-16',
        xl: 'px-24 pb-24',
      },
      border: {
        true: 'border-slate-200',
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
