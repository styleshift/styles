# StyleShift Style

A plain and simple UI library for Tailwind CSS using Class Variance Authority

- 🎨 Pre-built Tailwind CSS classes using CVA
- 🎯 Framework agnostic (just the classes)

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

- [Button](#button)
- [Link](#link)
- [Text](#text)

### Button

#### Root

```js
button.root({ variant: 'outline', size: 'sm' });
```

| Variant    | Type                             | Default |
| ---------- | -------------------------------- | ------- |
| surface    | `solid` `ghost` `outline` `soft` | `solid` |
| size       | `sm` `md` `lg`                   | `md`    |
| isDisabled | `boolean`                        | `false` |

### Link

#### Root

```js
link.root({ size: 'sm' });
```

| Variant | Type           | Default |
| ------- | -------------- | ------- |
| size    | `sm` `md` `lg` | `md`    |

### Text

#### Root

```js
text.root({ size: 'sm' });
```

| Variant | Type           | Default |
| ------- | -------------- | ------- |
| size    | `sm` `md` `lg` | `md`    |
