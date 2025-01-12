# StyleShift Style

A plain and simple UI library for Tailwind CSS using Class Variance Authority

- 🎨 Pre-built Tailwind CSS classes using CVA
- 🎯 Framework agnostic (just the classes)

## Installation

```bash
pnpm add @styleshift/styles
```

## Components

### Button

```js
button.root({ variant: 'outline', size: 'sm' });
```

| Variant    | Type                             | Default |
| ---------- | -------------------------------- | ------- |
| surface    | `solid` `ghost` `outline` `soft` | `solid` |
| size       | `sm` `md` `lg`                   | `md`    |
| isDisabled | `boolean`                        | `false` |
