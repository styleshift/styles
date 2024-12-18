const FLEX_CONFIG = {
  displays: ['block', 'inline'],
  alignments: ['start', 'end', 'center', 'stretch', 'baseline'],
  gaps: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
};

function validateInput(value, validValues, paramName) {
  if (!validValues.includes(value)) {
    throw new Error(`Invalid ${paramName} value. Must be one of: ${validValues.join(', ')}`);
  }
}

function flex(justify = 'start', items = 'start', gap = 'none', display = 'block') {
  // Validate all inputs
  validateInput(display, FLEX_CONFIG.displays, 'display');
  validateInput(justify, FLEX_CONFIG.alignments, 'justify');
  validateInput(items, FLEX_CONFIG.alignments, 'items');
  validateInput(gap, FLEX_CONFIG.gaps, 'gap');

  return [
    display === 'inline' ? 'inline-flex' : 'flex',
    `items-${items}`,
    `justify-${justify}`,
    gap !== 'none' && `gap-${gap}`,
  ].filter(Boolean);
}

export default flex;
