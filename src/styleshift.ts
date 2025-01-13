import * as classVarianceAuthority from 'cva';

export const cva = classVarianceAuthority.cva;

export const cx = classVarianceAuthority.cx;

export const compose = classVarianceAuthority.compose;

const styleshift = {
  define: cva,
  compose: compose,
  merge: cx,
};

export default styleshift;
