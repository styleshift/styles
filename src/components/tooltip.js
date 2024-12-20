/**
 * Tooltip Component
 * ==================================================
 * | Variant         | Options                                                     |
 * |-----------------|-------------------------------------------------------------|
 * | color           | light*, dark                                               |
 * ==================================================
 * * = default value
 *
 * Popup tooltip with directional arrows and animation support.
 * Compatible with Base UI tooltip implementation.
 */
export default {
  base: [],
  slots: {
    arrow: [
      'data-[side=bottom]:top-[-8px]',
      'data-[side=left]:right-[-13px]',
      'data-[side=left]:rotate-90',
      'data-[side=right]:left-[-13px]',
      'data-[side=right]:-rotate-90',
      'data-[side=top]:bottom-[-8px]',
      'data-[side=top]:rotate-180',
    ],
    popup: [
      'px-3 py-1 text-sm',
      'flex flex-col',
      'origin-[var(--transform-origin)]',
      'rounded outline',
      'bg-[canvas]',
      'transition-[transform,scale,opacity]',
      'data-[instant]:duration-0',
      'dark:-outline-offset-1',
      '[[data-starting-style],[data-ending-style]]:scale-90',
      '[[data-starting-style],[data-ending-style]]:opacity-0',
    ],
    trigger: [],
  },
  variants: {
    color: {
      light: {
        arrow: [],
        popup: ['outline-neutral-100'],
        trigger: [],
      },
      dark: {
        arrow: [],
        popup: ['outline-neutral-900'],
        trigger: [],
      },
    },
  },
  defaultVariants: {
    color: 'light',
  },
};
