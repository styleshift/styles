# StyleShift Style

A plain UI library for Tailwind CSS using Class Variance Authority

- 🎨 Tailwind CSS Component library — *written in CVA*
- 🎯 Framework agnostic — *just the classes*

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
| ---------- |----------------------------------| ------- |
| surface    | `solid` `ghost` `outline` `soft` | `solid` |
| size    | `default` `sm` `base` `md` `lg` | `default`    |
| isDisabled | `true` `false`                    | `false` |

### Link

#### Root

```js
link.root({ size: 'sm' });
```

| Variant | Type                           | Default |
| ------- |--------------------------------| ------- |
| size    | `default` `sm` `base` `md` `lg` | `default`    |

### Text

#### Root

```js
text.root({ size: 'sm' });
```

| Variant | Type           | Default |
| ------- | -------------- | ------- |
| size    | `default` `sm` `base` `md` `lg` | `default`    |
