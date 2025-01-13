# StyleShift Style

A plain user interface component library for Tailwind CSS using Class Variance Authority

- 🎨 UI Component Library — _written in CVA Tailwind CSS_
- 🎯 Javascript Framework Agnostic — _just the classes_

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

- [x] [Alert](src/components/alert.ts)
- [ ] Avatar
- [x] [Button](src/components/button.ts)
- [x] [Card](src/components/card.ts)
- [ ] Checkbox
- [ ] Header
- [ ] Input
- [x] [Link](src/components/link.ts)
- [x] [Separator](src/components/separator.ts)
- [x] [Text](src/components/text.ts)
