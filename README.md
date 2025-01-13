# StyleShift Style

A plain UI library for Tailwind CSS using Class Variance Authority

- 🎨 Tailwind CSS Component library — _written in CVA_
- 🎯 Framework agnostic — _just the classes_

## Installation

```bash
npm install @styleshift/styles
```

## Usage

```jsx
import { button } from '@styleshift/styles';

<button className={button.root({ surface: 'ghost' })}>Click Me!</button>;
```

## Components

- [ ] Alert
- [ ] Avatar
- [x] [Button](#button)
- [x] [Card](#card)
- [ ] Checkbox
- [x] [Separator](#separator)
- [ ] Header
- [ ] Input
- [x] [Link](#link)
- [x] [Text](#text)

### Alert

- TODO

### Avatar

- TODO

### Button

```jsx
<button className={button.root()}>Button</button>
```

| Root    | Type                             | Default   |
| ------- | -------------------------------- | --------- |
| size    | `default` `sm` `base` `md` `lg`  | `default` |
| surface | `solid` `ghost` `outline` `soft` | `solid`   |

### Card

```jsx
<div className={card.root()}>
  <div className={card.head()}>Head</div>
  <div className={card.body()}>Body</div>
  <div className={card.foot()}>Foot</div>
</div>
```

| Root    | Type                               | Default   |
| ------- | ---------------------------------- | --------- |
| border  | `true` `false`                     | `true`    |
| rounded | `true` `false`                     | `true`    |
| shadow  | `true` `false`                     | `true`    |
| space   | `default` `xs` `sm` `md` `lg` `xl` | `default` |

| Head   | Type                               | Default   |
| ------ | ---------------------------------- | --------- |
| border | `true` `false`                     | `true`    |
| space  | `default` `xs` `sm` `md` `lg` `xl` | `default` |

| Body   | Type                               | Default   |
| ------ | ---------------------------------- | --------- |
| border | `true` `false`                     | `true`    |
| space  | `default` `xs` `sm` `md` `lg` `xl` | `default` |

| Foot   | Type                               | Default   |
| ------ | ---------------------------------- | --------- |
| border | `true` `false`                     | `true`    |
| space  | `default` `xs` `sm` `md` `lg` `xl` | `default` |

### Checkbox

- TODO

### Header

- TODO

### Input

- TODO

### Link

```jsx
<a href="#" className={link.root()}>
  Text
</a>
```

| Root      | Type           | Default |
| --------- | -------------- | ------- |
| underline | `true` `false` | `true`  |

### Text

```jsx
<p className={text.root()}>Text</p>
```

| Root       | Type                                                                                          | Default   |
| ---------- | --------------------------------------------------------------------------------------------- | --------- |
| align      | `left` `center` `right` `justify` `start` `end`                                               | `left`    |
| case       | `default` `upper` `lower` `caps` `normal`                                                     | `default` |
| dimmed     | `true` `false`                                                                                | `false`   |
| leading    | `default` `none` `tight` `snug` `normal` `relaxed` `loose`                                    | `default` |
| size       | `default` `xs` `sm` `base` `md` `lg` `xl` `2xl` `3xl` `4xl` `5xl` `6xl`                       | `default` |
| strike     | `none` `under` `over` `through`                                                               | `none`    |
| tracking   | `default` `tighter` `tight` `normal` `wide` `wider` `widest`                                  | `default` |
| truncate   | `true` `false`                                                                                | `false`   |
| weight     | `default` `thin` `extralight` `light` `normal` `medium` `semibold` `bold` `extrabold` `black` | `default` |
| whitespace | `default` `normal` `nowrap` `pre` `preline` `prewrap` `break`                                 | `default` |
| wrap       | `default` `wrap` `nowrap` `balance` `pretty`                                                  | `default` |

### Separator

```jsx
<div className={separator.root()} />
```

| Root        | Type                    | Default      |
| ----------- | ----------------------- | ------------ |
| orientation | `horizontal` `vertical` | `horizontal` |
