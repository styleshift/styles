declare const textStyles: {
 readonly root: {
  readonly base: readonly [
   'text-slate-800',
   'font-sans',
   'antialiased',
   'transition-all',
  ];
  readonly variants: {
   readonly size: {
    readonly default: '';
    readonly xs: 'text-xs';
    readonly sm: 'text-sm';
    readonly base: 'text-base';
    readonly md: 'text-md';
    readonly lg: 'text-lg';
    readonly xl: 'text-xl';
    readonly '2xl': 'text-2xl';
    readonly '3xl': 'text-3xl';
    readonly '4xl': 'text-4xl';
    readonly '5xl': 'text-5xl';
    readonly '6xl': 'text-6xl';
   };
   readonly align: {
    readonly left: 'text-left';
    readonly center: 'text-center';
    readonly right: 'text-right';
    readonly justify: 'text-justify';
    readonly start: 'text-start';
    readonly end: 'text-end';
   };
   readonly strike: {
    readonly none: '';
    readonly under: 'underline';
    readonly over: 'overline';
    readonly through: 'line-through';
   };
   readonly weight: {
    readonly default: '';
    readonly thin: 'font-thin';
    readonly extralight: 'font-extralight';
    readonly light: 'font-light';
    readonly normal: 'font-normal';
    readonly medium: 'font-medium';
    readonly semibold: 'font-semibold';
    readonly bold: 'font-bold';
    readonly extrabold: 'font-extrabold';
    readonly black: 'font-black';
   };
   readonly case: {
    readonly default: '';
    readonly upper: 'uppercase';
    readonly lower: 'lowercase';
    readonly caps: 'capitalize';
    readonly normal: 'normal-case';
   };
   readonly wrap: {
    readonly default: '';
    readonly wrap: 'text-wrap';
    readonly nowrap: 'text-nowrap';
    readonly balance: 'text-balance';
    readonly pretty: 'text-pretty';
   };
   readonly whitespace: {
    readonly default: '';
    readonly normal: 'whitespace-normal';
    readonly nowrap: 'whitespace-nowrap';
    readonly pre: 'whitespace-pre';
    readonly preline: 'whitespace-pre-line';
    readonly prewrap: 'whitespace-pre-wrap';
    readonly break: 'whitespace-break-spaces';
   };
   readonly leading: {
    readonly default: '';
    readonly none: 'leading-none';
    readonly tight: 'leading-tight';
    readonly snug: 'leading-snug';
    readonly normal: 'leading-normal';
    readonly relaxed: 'leading-relaxed';
    readonly loose: 'leading-loose';
   };
   readonly tracking: {
    readonly default: '';
    readonly tighter: 'tracking-tighter';
    readonly tight: 'tracking-tight';
    readonly normal: 'tracking-normal';
    readonly wide: 'tracking-wide';
    readonly wider: 'tracking-wider';
    readonly widest: 'tracking-widest';
   };
   readonly truncate: {
    readonly true: readonly ['truncate'];
    readonly false: readonly [''];
   };
   readonly dimmed: {
    readonly true: readonly ['opacity-65'];
    readonly false: readonly ['opacity-100'];
   };
  };
  readonly defaultVariants: {
   readonly size: 'default';
   readonly align: 'left';
   readonly strike: 'none';
   readonly weight: 'default';
   readonly case: 'default';
   readonly wrap: 'default';
   readonly whitespace: 'default';
   readonly leading: 'default';
   readonly tracking: 'default';
   readonly truncate: false;
   readonly dimmed: false;
  };
 };
};
export { textStyles };
