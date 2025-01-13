import styleshift from '../styleshift';

/**
 * Card - A flexible container component with header, body, and footer sections
 * supporting multiple styling variants and spacing options.
 *
 * @typedef {Object} CardRootProps
 * @property {boolean} [shadow] - Enables box shadow for elevation
 * @property {boolean} [border] - Shows border around card
 * @property {boolean} [rounded] - Applies medium border radius
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @typedef {Object} CardHeadProps
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows bottom border
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @typedef {Object} CardBodyProps
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @typedef {Object} CardFootProps
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows top border
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - HTML div element props
 *
 * @example
 * ```tsx
 * // Basic card
 * <div className={card.root()}>
 *   <div className={card.body()}>
 *     Basic content
 *   </div>
 * </div>
 *
 * // Responsive card with all sections
 * <div className={card.root({
 *   shadow: true,
 *   rounded: true,
 *   space: {
 *     base: "sm",
 *     md: "md",
 *     lg: "lg"
 *   }
 * })}>
 *   <div className={card.head()}>
 *     <h3>Card Title</h3>
 *     <button>Close</button>
 *   </div>
 *   <div className={card.body()}>
 *     Card content goes here
 *   </div>
 *   <div className={card.foot()}>
 *     <button>Cancel</button>
 *     <button>Save</button>
 *   </div>
 * </div>
 *
 * // Common pattern: Simple content card
 * <div className={card.root({
 *   shadow: true,
 *   rounded: true
 * })}>
 *   <div className={card.body({ space: "md" })}>
 *     Content with padding
 *   </div>
 * </div>
 *
 * // Common pattern: Panel card
 * <div className={card.root({
 *   border: true,
 *   space: "sm"
 * })}>
 *   <div className={card.head({ border: true })}>
 *     Panel Header
 *   </div>
 *   <div className={card.body()}>
 *     Panel content
 *   </div>
 * </div>
 * ```
 *
 * @variant root
 * - shadow {boolean} - Enables box shadow for elevation
 * - border {boolean} - Shows border around card
 * - rounded {boolean} - Applies medium border radius
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 *
 * @variant head
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 * - border {boolean} - Shows bottom border
 *
 * @variant body
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 *
 * @variant foot
 * - space {'default'|'xs'|'sm'|'md'|'lg'|'xl'} - Controls padding
 * - border {boolean} - Shows top border
 *
 * @default
 * - shadow: true
 * - border: true
 * - rounded: true
 * - space: "default"
 *
 * @interface CardRootVariants
 * @property {boolean} [shadow] - Enables box shadow for elevation
 * @property {boolean} [border] - Shows border around card
 * @property {boolean} [rounded] - Applies medium border radius
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 *
 * @interface CardHeadVariants
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows bottom border
 *
 * @interface CardBodyVariants
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 *
 * @interface CardFootVariants
 * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [space] - Controls padding
 * @property {boolean} [border] - Shows top border
 *
 * @type {import('../styleshift').StyleshiftComponent<CardRootVariants> & {
 *   head: import('../styleshift').StyleshiftComponent<CardHeadVariants>,
 *   body: import('../styleshift').StyleshiftComponent<CardBodyVariants>,
 *   foot: import('../styleshift').StyleshiftComponent<CardFootVariants>
 * }}
 */
export const card = {
  /**
   * Root card container styles
   *
   * @property {Object} variants - Style variants configuration
   * @property {boolean} variants.shadow - Enables/disables card shadow
   * @property {boolean} variants.border - Controls border visibility
   * @property {boolean} variants.rounded - Controls border radius
   * @property {('default'|'xs'|'sm'|'md'|'lg'|'xl')} variants.space - Controls padding size
   *
   * @example
   * ```tsx
   * // Basic card
   * <div className={card.root()}>
   *   Basic card content
   * </div>
   *
   * // Styled card with all options
   * <div className={card.root({
   *   shadow: true,
   *   border: true,
   *   rounded: true,
   *   space: "lg"
   * })}>
   *   Custom styled card
   * </div>
   * ```
   *
   * @returns {string} Combined Tailwind CSS classes
   */
  root: styleshift.define({
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

  /**
   * Card header with optional bottom border and spacing
   *
   * @example
   * ```tsx
   * // Basic header
   * <div className={card.head()}>
   *   <h3>Card Title</h3>
   *   <button>×</button>
   * </div>
   *
   * // Custom header with large spacing
   * <div className={card.head({
   *   space: "lg",
   *   border: false
   * })}>
   *   <h2>Large Header</h2>
   *   <div>Actions</div>
   * </div>
   * ```
   *
   * @returns {string} Tailwind classes
   */
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

  /**
   * Card body with configurable padding
   *
   * @example
   * ```tsx
   * // Basic body
   * <div className={card.body()}>
   *   <p>Card content</p>
   * </div>
   *
   * // Body with custom spacing
   * <div className={card.body({ space: "md" })}>
   *   <div>Content with more padding</div>
   * </div>
   * ```
   *
   * @returns {string} Tailwind classes
   */
  body: styleshift.define({
    base: [''],
    variants: {
      space: {
        default: '',
        xs: 'p-2',
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-1',
        xl: 'p-2',
      },
    },
    defaultVariants: {
      space: 'sm',
    },
  }),

  /**
   * Card footer with optional top border and spacing
   *
   * @example
   * ```tsx
   * // Basic footer
   * <div className={card.foot()}>
   *   <button>Cancel</button>
   *   <button>Submit</button>
   * </div>
   *
   * // Custom footer with small spacing
   * <div className={card.foot({
   *   space: "sm",
   *   border: true
   * })}>
   *   <div>Status: Active</div>
   *   <button>Update</button>
   * </div>
   * ```
   *
   * @returns {string} Tailwind classes
   */
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
