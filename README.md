# StyleShift Style

A plain UI library for Tailwind CSS using Class Variance Authority

- 🎨 Tailwind CSS Component library — _written in CVA_
- 🎯 Framework agnostic — _just the classes_

## Documentation

- [JS Docs](https://styleshift.github.io/styles/)

## Installation

```bash
npm install @styleshift/styles
```

## Usage

```jsx
import { button } from '@styleshift/styles';

<button className={button.root({ surface: 'ghost' })}>Click Me!</button>;
```

## Components

- [ ] Alert
- [ ] Avatar
- [x] [Button](src/components/button.ts)
- [x] [Card](src/components/card.ts)
- [ ] Checkbox
- [ ] Header
- [ ] Input
- [x] [Link](src/components/link.ts)
- [x] [Separator](src/components/separator.ts)
- [x] [Text](src/components/text.ts)
