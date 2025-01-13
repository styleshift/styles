# StyleShift Style

A plain UI library for Tailwind CSS using Class Variance Authority

- 🎨 Tailwind CSS Component library — _written in CVA_
- 🎯 Framework agnostic — _just the classes_

## Installation

```bash
pnpm add @styleshift/styles
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
- [ ] Card
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
| surface | `solid` `ghost` `outline` `soft` | `solid`   |
| size    | `default` `sm` `base` `md` `lg`  | `default` |

### Card

- TODO

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

| Root   | Type                                                                                          | Default   |
| ------ | --------------------------------------------------------------------------------------------- | --------- |
| size   | `default` `sm` `base` `md` `lg`                                                               | `default` |
| align  | `left` `center` `right` `justify` `start` `end`                                               | `left`    |
| strike | `none` `under` `over` `through`                                                               | `none`    |
| weight | `default` `thin` `extralight` `light` `normal` `medium` `semibold` `bold` `extrabold` `black` | `default` |
| case   | `default` `upper` `lower` `caps` `normal`                                                     | `default` |
