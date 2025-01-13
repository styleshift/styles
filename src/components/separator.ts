import styleshift from '../styleshift';

/**
 * Separator - A flexible divider component for visually separating content
 * with support for horizontal and vertical orientations.
 *
 * @typedef {Object} SeparatorProps
 * @property {('horizontal'|'vertical')} [orientation] - Controls the separator's orientation
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @example
 * ```tsx
 * // Basic horizontal separator
 * <div className={separator.root()} />
 *
 * // Vertical separator for layout
 * <div className={separator.root({
 *   orientation: "vertical"
 * })} />
 *
 * // Common pattern: Content divider
 * <section>
 *   <h2>Section 1</h2>
 *   <div className={separator.root()} />
 *   <p>Content below</p>
 * </section>
 *
 * // Common pattern: Vertical divider in flex layout
 * <div className="flex h-8">
 *   <span>Left</span>
 *   <div className={separator.root({ orientation: "vertical" })} />
 *   <span>Right</span>
 * </div>
 * ```
 *
 * @variant orientation
 * - horizontal {'horizontal'} - Creates a horizontal dividing line (default)
 * - vertical {'vertical'} - Creates a vertical dividing line
 *
 * @default
 * - orientation: "horizontal"
 *
 * @interface SeparatorVariants
 * @property {('horizontal'|'vertical')} [orientation] - Controls the separator's orientation
 *
 * @type {import('../styleshift').StyleshiftComponent<SeparatorVariants>}
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
