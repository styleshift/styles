# StyleShift Style

A minimalist styling library built with Tailwind CSS and Class Variance Authority (CVA).

- 🎨 Pre-built CVA style variants without JSX components
- 🔌 Plug-and-play with Tailwind CSS
- 🎯 Framework agnostic

## Usage

```bash
pnpm add @styleshift/styles
```

```tsx
import { button } from '@styleshift/styles';

<button className={button({ variant: 'outline', size: 'sm' })}>Click me</button>;
```
