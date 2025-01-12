# StyleShift Style

A plain and simple UI library for Tailwind CSS using Class Variance Authority

- 🎨 Pre-built Tailwind CSS classes using CVA
- 🎯 Framework agnostic (just the classes)

## Installation

```bash
pnpm add @styleshift/styles
```

## Usage

```js
import { button } from '@styleshift/styles';
button.root({ variant: 'outline', size: 'sm' });
// outputs all the classes for the button
```

## Components

### Button

| Property   | Type                             | Default |
| ---------- | -------------------------------- | ------- |
| variant    | `solid` `ghost` `outline` `soft` | `solid` |
| size       | `sm` `md` `lg`                   | `md`    |
| isDisabled | `boolean`                        | `false` |
