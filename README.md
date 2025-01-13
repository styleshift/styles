# StyleShift Style

A plain UI library for Tailwind CSS using Class Variance Authority

- 🎨 Tailwind CSS Component library — _written in CVA_
- 🎯 Framework agnostic — _just the classes_

[![npm version](https://badge.fury.io/js/@styleshift%2Fstyles.svg)](https://www.npmjs.com/package/@styleshift/styles)

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
button.root({ variant: 'outline', size: 'sm' });
```

| Variant    | Type                             | Default   |
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

| Variant | Type                            | Default   |
| ------- | ------------------------------- | --------- |
| size    | `default` `sm` `base` `md` `lg` | `default` |

### Text

#### Root

```js
text.root({ size: 'sm' });
```

| Variant | Type                            | Default   |
| ------- | ------------------------------- | --------- |
| size    | `default` `sm` `base` `md` `lg` | `default` |
