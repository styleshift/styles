# StyleShift Style

A plain UI library for Tailwind CSS using Class Variance Authority

- 🎨 Tailwind CSS Component library — _written in CVA_
- 🎯 Framework agnostic — _just the classes_

## Installation

```bash
pnpm add @styleshift/styles
```

## Usage

```js
import { button } from '@styleshift/styles';
button.root({ variant: 'outline', size: 'sm' });
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

#### Root

```js
button.root({ surface: 'outline' });
```

| Root       | Type                             | Default   |
| ---------- | -------------------------------- | --------- |
| surface    | `solid` `ghost` `outline` `soft` | `solid`   |
| size       | `default` `sm` `base` `md` `lg`  | `default` |
| isDisabled | `true` `false`                   | `false`   |

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

#### Root

```js
link.root({ size: 'sm' });
```

| Root | Type                            | Default   |
| ---- | ------------------------------- | --------- |
| size | `default` `sm` `base` `md` `lg` | `default` |

### Text

#### Root

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
