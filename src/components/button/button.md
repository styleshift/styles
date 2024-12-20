# Button

A versatile UI button component with multiple variants and states.

## Usage

```jsx
import { styleshift } from '@styleshift/core';

<button className={styleshift.button()}>Click Me!</button>;
```

## Variants

```jsx
// Surface Types
<button className={styleshift.button()}>Default</button>
<button className={styleshift.button({ surface: 'outline' })}>Outline</button>
<button className={styleshift.button({ surface: 'soft' })}>Soft</button>
<button className={styleshift.button({ surface: 'ghost' })}>Ghost</button>

// Colors
<button className={styleshift.button({ color: 'primary' })}>Primary</button>
<button className={styleshift.button({ color: 'secondary' })}>Secondary</button>

// Sizes
<button className={styleshift.button({ size: 'small' })}>Small</button>
<button className={styleshift.button({ size: 'large' })}>Large</button>
```

## Properties

| Prop               | Type                                                                                      | Default     | Description        |
| ------------------ | ----------------------------------------------------------------------------------------- | ----------- | ------------------ |
| `surface`          | `'solid' \| 'outline' \| 'soft' \| 'ghost'`                                               | `'solid'`   | Surface style      |
| `color`            | `'primary' \| 'secondary' \| 'positive' \| 'negative' \| 'warning' \| 'black' \| 'white'` | `'primary'` | Color theme        |
| `size`             | `'tiny' \| 'small' \| 'medium' \| 'large' \| 'huge'`                                      | `'medium'`  | Size               |
| `radius`           | `'none' \| 'small' \| 'medium' \| 'large' \| 'full'`                                      | `'medium'`  | Border radius      |
| `isFullWidth`      | `boolean`                                                                                 | `false`     | Full width button  |
| `isDisabled`       | `boolean`                                                                                 | `false`     | Disabled state     |
| `disableAnimation` | `boolean`                                                                                 | `false`     | Removes animations |
