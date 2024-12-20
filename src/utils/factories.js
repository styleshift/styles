import { tv } from '@styleshift/support';
import button from '../components/button.js';
import link from '../components/link.js';
import text from '../components/text.js';
import tooltip from '../components/tooltip.js';

/**
 * Creates a reusable factory function for any component config
 * @param {Object} config - The component configuration
 * @returns {Function} A factory function that generates classes for that component
 */
export const createComponentFactory = (config) => {
  return (props = {}) => {
    if (!config) {
      throw new Error('Component configuration is required');
    }
    return tv(config)(props);
  };
};

/**
 * Pre-configured component factories
 * Usage: styleshift.button({ size: 'large', color: 'primary' })
 */
export const styleshift = {
  button: createComponentFactory(button),
  link: createComponentFactory(link),
  text: createComponentFactory(text),
  tooltip: createComponentFactory(tooltip),
  // When you add new styleshift, just add them here:
  // input: createComponentFactory(input),
  // card: createComponentFactory(card),
};
