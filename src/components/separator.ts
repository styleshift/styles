import styleshift from '../styleshift';

/**
 * A separator component for visually dividing content.
 *
 * @type {import('../styleshift').StyleshiftComponent}
 *
 * @example
 * ```tsx
 * // Horizontal separator (default)
 * <div className={separator.root()} />
 *
 * // Vertical separator
 * <div className={separator.root({ orientation: "vertical" })} />
 * ```
 *
 * @variant orientation
 * - horizontal: Horizontal line (default)
 * - vertical: Vertical line
 *
 * @default
 * - orientation: "horizontal"
 */
export const separator = {
  root: styleshift.define({
    base: ['shrink-0', 'border-0', 'transition-colors'],
    variants: {
      orientation: {
        horizontal: ['h-[1px]', 'w-full', 'bg-slate-200'],
        vertical: ['h-full', 'w-[1px]', 'bg-slate-200'],
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }),
};
