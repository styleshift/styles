/**
 * Button - A flexible button component supporting multiple surfaces and sizes
 * with built-in focus and disabled states.
 *
 * @typedef {Object} ButtonProps
 * @property {('solid' | 'outline' | 'ghost' | 'soft')} [surface] - Button surface style
 * @property {('sm' | 'base' | 'md' | 'lg')} [size] - Button size variant
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - HTML button element props
 *
 * @example
 * ```tsx
 * // Basic button
 * <button className={button.root()}>
 *   Click me
 * </button>
 *
 * // Responsive button that changes size
 * <button className={button.root({
 *   size: {
 *     base: "sm",
 *     md: "base",
 *     lg: "lg"
 *   }
 * })}>
 *   Responsive Button
 * </button>
 *
 * // Common pattern: Primary action button
 * <button className={button.root({
 *   surface: "solid",
 *   size: "lg"
 * })}>
 *   Save Changes
 * </button>
 *
 * // Common pattern: Secondary action button
 * <button className={button.root({
 *   surface: "outline",
 *   size: "base"
 * })}>
 *   Cancel
 * </button>
 *
 * // Common pattern: Subtle action button
 * <button className={button.root({
 *   surface: "ghost",
 *   size: "sm"
 * })}>
 *   Learn More
 * </button>
 * ```
 *
 * @variant surface
 * - solid {'solid'} - High emphasis button with solid background
 * - outline {'outline'} - Medium emphasis button with border
 * - ghost {'ghost'} - Low emphasis button with hover effect
 * - soft {'soft'} - Subtle button with light background
 *
 * @variant size
 * - sm {'sm'} - Compact size (h-8, text-sm)
 * - base {'base'} - Default size (h-10, text-base)
 * - md {'md'} - Medium size (h-12, text-md)
 * - lg {'lg'} - Large size (h-14, text-lg)
 *
 * @default
 * - surface: "solid"
 * - size: "base"
 *
 * @see canFocus - Adds focus ring styles
 * @see canDisable - Handles disabled state styles
 *
 * @interface ButtonVariants
 * @property {('solid' | 'outline' | 'ghost' | 'soft')} [surface] - Button surface style
 * @property {('sm' | 'base' | 'md' | 'lg')} [size] - Button size variant
 *
 * @type {import('../styleshift').StyleshiftComponent<ButtonVariants>}
 */
export declare const button: {
  /**
   * Root styles for the button component
   *
   * @property {Object} variants - Style variants configuration
   * @property {('solid' | 'outline' | 'ghost' | 'soft')} variants.surface - Button surface style
   * @property {('sm' | 'base' | 'md' | 'lg')} variants.size - Button size variant
   *
   * @returns {string} Combined Tailwind CSS classes
   */
  root: (
    props?:
      | ((
          | (import('cva').VariantProps<
              (
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
              ) => string
            > &
              import('cva').VariantProps<
                (
                  props?:
                    | ({
                        surface?: 'solid' | 'outline' | 'ghost' | 'soft' | undefined;
                        size?: 'sm' | 'base' | 'md' | 'lg' | undefined;
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
                ) => string
              >)
          | undefined
        ) &
          (
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
};
