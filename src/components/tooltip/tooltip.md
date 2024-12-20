# Tooltip

A small popup component that displays additional information when hovering over or focusing on an element.

## Usage

```jsx
import { styleshift } from '@styleshift/core';

<Tooltip content="Helpful information">
  <button className={styleshift.button()}>Hover me!</button>
</Tooltip>;
```

## Variants

```jsx
// Placement
<Tooltip content="Top tooltip" placement="top">Hover me</Tooltip>
<Tooltip content="Bottom tooltip" placement="bottom">Hover me</Tooltip>
<Tooltip content="Left tooltip" placement="left">Hover me</Tooltip>
<Tooltip content="Right tooltip" placement="right">Hover me</Tooltip>

// Colors
<Tooltip content="Primary tooltip" color="primary">Hover me</Tooltip>
<Tooltip content="Secondary tooltip" color="secondary">Hover me</Tooltip>

// Sizes
<Tooltip content="Small tooltip" size="small">Hover me</Tooltip>
<Tooltip content="Large tooltip" size="large">Hover me</Tooltip>
```

## Properties

| Prop               | Type                                             | Default    | Description                       |
| ------------------ | ------------------------------------------------ | ---------- | --------------------------------- |
| `content`          | `string \| ReactNode`                            | `''`       | Content to display in tooltip     |
| `placement`        | `'top' \| 'bottom' \| 'left' \| 'right'`         | `'top'`    | Tooltip placement                 |
| `color`            | `'primary' \| 'secondary' \| 'black' \| 'white'` | `'black'`  | Color theme                       |
| `size`             | `'small' \| 'medium' \| 'large'`                 | `'medium'` | Size                              |
| `delay`            | `number`                                         | `0`        | Delay before showing tooltip (ms) |
| `isDisabled`       | `boolean`                                        | `false`    | Disable tooltip                   |
| `disableAnimation` | `boolean`                                        | `false`    | Removes animations                |
