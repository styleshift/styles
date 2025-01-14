declare const cardStyles: {
 readonly root: {
  readonly base: readonly ['transition-all border'];
  readonly variants: {
   readonly shadow: {
    readonly true: 'shadow';
    readonly false: '';
   };
   readonly border: {
    readonly true: 'border-slate-300';
    readonly false: 'border-transparent';
   };
   readonly rounded: {
    readonly true: 'rounded-md';
    readonly false: '';
   };
   readonly space: {
    readonly default: 'p-0';
    readonly xs: 'p-1';
    readonly sm: 'p-2';
    readonly md: 'p-4';
    readonly lg: 'p-8';
    readonly xl: 'p-16';
   };
  };
  readonly defaultVariants: {
   readonly shadow: true;
   readonly border: true;
   readonly rounded: true;
   readonly space: 'default';
  };
 };
 readonly head: {
  readonly base: readonly ['border-b flex justify-between items-center'];
  readonly variants: {
   readonly space: {
    readonly default: '';
    readonly xs: 'px-2 pt-1';
    readonly sm: 'px-4 pt-2';
    readonly md: 'px-8 pt-4';
    readonly lg: 'px-16 pt-8';
    readonly xl: 'px-24 pt-16';
   };
   readonly border: {
    readonly true: 'border-slate-300';
    readonly false: 'border-transparent';
   };
  };
  readonly defaultVariants: {
   readonly space: 'sm';
   readonly border: true;
  };
  readonly compoundVariants: readonly [
   {
    readonly border: true;
    readonly space: 'default';
    readonly class: '';
   },
   {
    readonly border: true;
    readonly space: 'xs';
    readonly class: 'pb-1';
   },
   {
    readonly border: true;
    readonly space: 'sm';
    readonly class: 'pb-2';
   },
   {
    readonly border: true;
    readonly space: 'md';
    readonly class: 'pb-4';
   },
   {
    readonly border: true;
    readonly space: 'lg';
    readonly class: 'pb-8';
   },
   {
    readonly border: true;
    readonly space: 'xl';
    readonly class: 'pb-16';
   },
  ];
 };
 readonly body: {
  readonly base: readonly [''];
  readonly variants: {
   readonly space: {
    readonly default: '';
    readonly xs: 'p-1';
    readonly sm: 'p-2';
    readonly md: 'p-4';
    readonly lg: 'p-8';
    readonly xl: 'p-16';
   };
  };
  readonly defaultVariants: {
   readonly space: 'sm';
  };
 };
 readonly foot: {
  readonly base: readonly ['border-t flex justify-between items-center'];
  readonly variants: {
   readonly space: {
    readonly default: '';
    readonly xs: 'px-2 pb-1';
    readonly sm: 'px-4 pb-2';
    readonly md: 'px-8 pb-4';
    readonly lg: 'px-16 pb-8';
    readonly xl: 'px-24 pb-16';
   };
   readonly border: {
    readonly true: 'border-slate-300';
    readonly false: 'border-transparent';
   };
  };
  readonly defaultVariants: {
   readonly space: 'sm';
   readonly border: true;
  };
  readonly compoundVariants: readonly [
   {
    readonly border: true;
    readonly space: 'default';
    readonly class: '  ';
   },
   {
    readonly border: true;
    readonly space: 'xs';
    readonly class: 'pt-1';
   },
   {
    readonly border: true;
    readonly space: 'sm';
    readonly class: 'pt-2';
   },
   {
    readonly border: true;
    readonly space: 'md';
    readonly class: 'pt-4';
   },
   {
    readonly border: true;
    readonly space: 'lg';
    readonly class: 'pt-8';
   },
   {
    readonly border: true;
    readonly space: 'xl';
    readonly class: 'pt-16';
   },
  ];
 };
};
declare const card: {
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
 head: (
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
 body: (
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
 foot: (
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
declare const cardDocs: Record<string, any>;
export { card, cardDocs, cardStyles };
