import * as classVarianceAuthority from 'class-variance-authority';

/**
 * Shared styles
 */
export const focus = ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-slate-600'];
export const disabled = ['disabled:opacity-50', 'disabled:cursor-not-allowed', 'disabled:pointer-events-none'];

/**
 * Helpers
 */

export const cva = classVarianceAuthority.cva;

export const cx = classVarianceAuthority.cx;

export type VariantProps<T extends (...args: any) => any> = classVarianceAuthority.VariantProps<T>;
