function flex(justify = 'start', items = 'start', gap = 'none', display = 'block') {
  const gapClass = gap === 'none' ? '' : `gap-${gap}`;
  return [`${display === 'inline' ? 'inline-flex' : 'flex'}`, `items-${items}`, `justify-${justify}`, gapClass].filter(
    Boolean,
  ); // Remove empty classes (e.g., if gap is 'none')
}

export default flex;
