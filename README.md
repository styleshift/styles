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
- [ ] Divider
- [ ] Header
- [ ] Input
- [x] [Link](#link)
- [x] [Text](#text)

### Alert

- TODO

### Avatar

- TODO

### Button

```js
button.root({ surface: 'outline' });
```

| Root    | Type                             | Default   |
| ------- | -------------------------------- | --------- |
| size    | `default` `sm` `base` `md` `lg`  | `default` |
| surface | `solid` `ghost` `outline` `soft` | `solid`   |

### Card

```js
card.root({ rounded: false' });
card.head({ space: 'md' });
card.body({ space: 'lg' });
card.foot({ space: 'md' });

```

| Root    | Type                               | Default   |
| ------- | ---------------------------------- | --------- |
| border  | `true` `false`                     | `true`    |
| rounded | `true` `false`                     | `true`    |
| shadow  | `true` `false`                     | `true`    |
| space   | `default` `xs` `sm` `md` `lg` `xl` | `default` |

| Head  | Type                               | Default   |
| ----- | ---------------------------------- | --------- |
| space | `default` `xs` `sm` `md` `lg` `xl` | `default` |

| Body  | Type                               | Default   |
| ----- | ---------------------------------- | --------- |
| space | `default` `xs` `sm` `md` `lg` `xl` | `default` |

| Foot  | Type                               | Default   |
| ----- | ---------------------------------- | --------- |
| space | `default` `xs` `sm` `md` `lg` `xl` | `default` |

### Checkbox

- TODO

### Divider

- TODO

### Header

- TODO

### Input

- TODO

### Link

```js
link.root({ size: 'sm' });
```

| Root | Type                            | Default   |
| ---- | ------------------------------- | --------- |
| size | `default` `sm` `base` `md` `lg` | `default` |

### Text

```js
text.root({ align: 'center' });
```

| Root       | Type                                                                                          | Default   |
| ---------- | --------------------------------------------------------------------------------------------- | --------- |
| align      | `left` `center` `right` `justify` `start` `end`                                               | `left`    |
| case       | `default` `upper` `lower` `caps` `normal`                                                     | `default` |
| dimmed     | `true` `false`                                                                                | `false`   |
| leading    | `default` `none` `tight` `snug` `normal` `relaxed` `loose`                                    | `default` |
| size       | `default` `sm` `base` `md` `lg`                                                               | `default` |
| strike     | `none` `under` `over` `through`                                                               | `none`    |
| tracking   | `default` `tighter` `tight` `normal` `wide` `wider` `widest`                                  | `default` |
| truncate   | `true` `false`                                                                                | `false`   |
| weight     | `default` `thin` `extralight` `light` `normal` `medium` `semibold` `bold` `extrabold` `black` | `default` |
| whitespace | `default` `normal` `nowrap` `pre` `preline` `prewrap` `break`                                 | `default` |
| wrap       | `default` `wrap` `nowrap` `balance` `pretty`                                                  | `default` |
