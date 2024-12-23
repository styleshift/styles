type ButtonSurface = 'solid' | 'outline' | 'soft' | 'ghost'
type ButtonColor = 'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'black' | 'white'
type ButtonRounded = 'none' | 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | 'full'
type ButtonSize = 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl'

interface ButtonVariants {
  surface?: ButtonSurface
  color?: ButtonColor
  rounded?: ButtonRounded
  isFullWidth?: boolean
  size?: ButtonSize
  disabled?: boolean
  disableFocus?: boolean
  disableTransition?: boolean
}

interface ButtonCompoundVariant {
  surface?: ButtonSurface
  color?: ButtonColor
  disabled?: boolean
  disableFocus?: boolean
  class: string[]
}

interface ButtonConfig {
  base: string[]
  variants: {
    surface: Record<ButtonSurface, string[]>
    color: Record<ButtonColor, string[]>
    rounded: Record<ButtonRounded, string[]>
    isFullWidth: Record<'true' | 'false', string[]>
    size: Record<ButtonSize, string[]>
    disabled: Record<'true' | 'false', string[]>
    disableFocus: Record<'true' | 'false', string[]>
    disableTransition: Record<'true' | 'false', string[]>
  }
  defaultVariants: Required<ButtonVariants>
  compoundVariants: ButtonCompoundVariant[]
}

declare const buttonConfig: ButtonConfig
export default buttonConfig
