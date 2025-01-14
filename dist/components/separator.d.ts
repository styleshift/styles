declare const separatorStyles: {
 readonly root: {
  readonly base: readonly ['shrink-0', 'border-0', 'transition-colors'];
  readonly variants: {
   readonly orientation: {
    readonly horizontal: readonly ['w-full', 'bg-slate-300'];
    readonly vertical: readonly ['h-full', 'bg-slate-300'];
   };
   readonly size: {
    readonly xs: readonly [];
    readonly sm: readonly [];
    readonly md: readonly [];
    readonly lg: readonly [];
    readonly xl: readonly [];
   };
  };
  readonly compoundVariants: readonly [
   {
    readonly orientation: 'horizontal';
    readonly size: 'xs';
    readonly class: readonly ['h-px'];
   },
   {
    readonly orientation: 'vertical';
    readonly size: 'xs';
    readonly class: readonly ['w-px'];
   },
   {
    readonly orientation: 'horizontal';
    readonly size: 'sm';
    readonly class: readonly ['h-0.5'];
   },
   {
    readonly orientation: 'vertical';
    readonly size: 'sm';
    readonly class: readonly ['w-0.5'];
   },
   {
    readonly orientation: 'horizontal';
    readonly size: 'md';
    readonly class: readonly ['h-1'];
   },
   {
    readonly orientation: 'vertical';
    readonly size: 'md';
    readonly class: readonly ['w-1'];
   },
   {
    readonly orientation: 'horizontal';
    readonly size: 'lg';
    readonly class: readonly ['h-2'];
   },
   {
    readonly orientation: 'vertical';
    readonly size: 'lg';
    readonly class: readonly ['w-2'];
   },
   {
    readonly orientation: 'horizontal';
    readonly size: 'xl';
    readonly class: readonly ['h-4'];
   },
   {
    readonly orientation: 'vertical';
    readonly size: 'xl';
    readonly class: readonly ['w-4'];
   },
  ];
  readonly defaultVariants: {
   readonly orientation: 'horizontal';
   readonly size: 'xs';
  };
 };
};
declare const separator: {
 root: (
  props?:
   | (
      | {
         class?:
          | string
          | number
          | boolean
          | (
             | string
             | number
             | boolean
             | (
                | string
                | number
                | boolean
                | (
                   | string
                   | number
                   | boolean
                   | (
                      | string
                      | number
                      | boolean
                      | (
                         | string
                         | number
                         | boolean
                         | (
                            | string
                            | number
                            | boolean
                            | (
                               | string
                               | number
                               | boolean
                               | (
                                  | string
                                  | number
                                  | boolean
                                  | (
                                     | string
                                     | number
                                     | boolean
                                     | (
                                        | string
                                        | number
                                        | boolean
                                        | (
                                           | string
                                           | number
                                           | boolean
                                           | any
                                           | {
                                              [x: string]: any;
                                             }
                                           | null
                                           | undefined
                                          )[]
                                        | {
                                           [x: string]: any;
                                          }
                                        | null
                                        | undefined
                                       )[]
                                     | {
                                        [x: string]: any;
                                       }
                                     | null
                                     | undefined
                                    )[]
                                  | {
                                     [x: string]: any;
                                    }
                                  | null
                                  | undefined
                                 )[]
                               | {
                                  [x: string]: any;
                                 }
                               | null
                               | undefined
                              )[]
                            | {
                               [x: string]: any;
                              }
                            | null
                            | undefined
                           )[]
                         | {
                            [x: string]: any;
                           }
                         | null
                         | undefined
                        )[]
                      | {
                         [x: string]: any;
                        }
                      | null
                      | undefined
                     )[]
                   | {
                      [x: string]: any;
                     }
                   | null
                   | undefined
                  )[]
                | {
                   [x: string]: any;
                  }
                | null
                | undefined
               )[]
             | {
                [x: string]: any;
               }
             | null
             | undefined
            )[]
          | {
             [x: string]: any;
            }
          | null
          | undefined;
         className?: undefined;
        }
      | {
         class?: undefined;
         className?:
          | string
          | number
          | boolean
          | (
             | string
             | number
             | boolean
             | (
                | string
                | number
                | boolean
                | (
                   | string
                   | number
                   | boolean
                   | (
                      | string
                      | number
                      | boolean
                      | (
                         | string
                         | number
                         | boolean
                         | (
                            | string
                            | number
                            | boolean
                            | (
                               | string
                               | number
                               | boolean
                               | (
                                  | string
                                  | number
                                  | boolean
                                  | (
                                     | string
                                     | number
                                     | boolean
                                     | (
                                        | string
                                        | number
                                        | boolean
                                        | (
                                           | string
                                           | number
                                           | boolean
                                           | any
                                           | {
                                              [x: string]: any;
                                             }
                                           | null
                                           | undefined
                                          )[]
                                        | {
                                           [x: string]: any;
                                          }
                                        | null
                                        | undefined
                                       )[]
                                     | {
                                        [x: string]: any;
                                       }
                                     | null
                                     | undefined
                                    )[]
                                  | {
                                     [x: string]: any;
                                    }
                                  | null
                                  | undefined
                                 )[]
                               | {
                                  [x: string]: any;
                                 }
                               | null
                               | undefined
                              )[]
                            | {
                               [x: string]: any;
                              }
                            | null
                            | undefined
                           )[]
                         | {
                            [x: string]: any;
                           }
                         | null
                         | undefined
                        )[]
                      | {
                         [x: string]: any;
                        }
                      | null
                      | undefined
                     )[]
                   | {
                      [x: string]: any;
                     }
                   | null
                   | undefined
                  )[]
                | {
                   [x: string]: any;
                  }
                | null
                | undefined
               )[]
             | {
                [x: string]: any;
               }
             | null
             | undefined
            )[]
          | {
             [x: string]: any;
            }
          | null
          | undefined;
        }
     )
   | undefined,
 ) => string;
};
declare const separatorDocs: Record<string, any>;
export { separator, separatorDocs, separatorStyles };
