import { type VariantProps } from 'class-variance-authority';

export declare const button: (props?: {
  surface?: 'solid' | 'outline' | 'ghost' | 'soft';
  size?: 'sm' | 'md' | 'lg';
}) => string;

export type ButtonVariants = VariantProps<typeof button>; 