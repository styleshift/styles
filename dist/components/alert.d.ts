declare const alertStyles: {
 readonly root: {
  readonly base: readonly [
   'relative',
   'w-full',
   'rounded-lg',
   'border',
   'p-4',
   'transition-all',
  ];
  readonly variants: {
   readonly surface: {
    readonly default: readonly ['border-slate-500', 'text-slate-800'];
    readonly negative: readonly ['border-red-500', 'text-red-800'];
    readonly positive: readonly ['border-green-500', 'text-green-800'];
   };
  };
  readonly defaultVariants: {
   readonly surface: 'default';
  };
 };
 readonly title: {
  readonly base: readonly [
   'mb-1',
   'font-medium',
   'leading-none',
   'tracking-tight',
  ];
 };
 readonly description: {
  readonly base: readonly ['text-sm', 'opacity-90'];
 };
};
declare const alertDocs: Record<string, any>;
declare const alert: {
 root: (
  props?:
   | ({
      readonly surface?: 'default' | 'negative' | 'positive' | undefined;
     } & (
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
     ))
   | undefined,
 ) => string;
 title: (
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
 description: (
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
export { alert, alertDocs, alertStyles };
