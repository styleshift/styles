import { cva, compose, cx, VariantProps } from 'cva';

type StyleConfig = {
  base?: readonly string[];
  variants?: Record<string, Record<string, readonly string[]>>;
  defaultVariants?: Record<string, string>;
};

const styleshift = {
  define: cva,
  compose: compose,
  merge: cx,
};

export type { VariantProps };
export default styleshift;
