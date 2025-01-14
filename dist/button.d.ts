declare const buttonStyles: {
 readonly root: {
  readonly base: readonly [
   'inline-flex',
   'items-center',
   'justify-center',
   'gap-2',
   'font-[500]',
   'rounded',
   'whitespace-nowrap',
   'transition-all',
   'border-2',
  ];
  readonly variants: {
   readonly surface: {
    readonly solid: readonly [
     'border-transparent bg-slate-800',
     'text-white',
     'hover:bg-slate-700',
    ];
    readonly outline: readonly [
     'border-slate-800',
     'text-slate-800',
     'hover:border-slate-700',
    ];
    readonly ghost: readonly [
     'border-transparent',
     'text-slate-800',
     'hover:bg-slate-100',
    ];
    readonly soft: readonly [
     'border-transparent',
     'bg-slate-100',
     'text-slate-800',
     'hover:bg-slate-200',
    ];
   };
   readonly size: {
    readonly sm: 'text-sm h-8 px-4';
    readonly base: 'text-base h-10 px-4';
    readonly md: 'text-md h-12 px-5';
    readonly lg: 'text-lg h-14 px-5';
   };
  };
  readonly defaultVariants: {
   readonly surface: 'solid';
   readonly size: 'base';
  };
 };
};
export { buttonStyles };
