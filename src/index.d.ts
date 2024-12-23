declare module '../../../../src' {
  export const styleshift: {
    badge: (options?: {
      size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
      surface?: 'outline';
      color?: 'secondary';
    }) => string;
  };
}
