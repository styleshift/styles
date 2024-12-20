import { StateSection, Preview } from '../components/Documentation.jsx';
import { capitalize } from '../utils/capitalize.js';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { styleshift } from '../../../src/index.js';

export const ButtonExamples = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Preview id="button" title="Button" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div>
        <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
          <button className={styleshift.button()}>Click Me!</button>
        </div>

        {isCollapsed && (
          <div onClick={() => setIsCollapsed(!isCollapsed)} className="mt-3 text-black underline cursor-pointer">
            Show Variants
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="space-y-4 mt-3">
          <StateSection id="button-surfaces" title="Button Surfaces">
            <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
              <button className={styleshift.button()}>Default</button>
              <button className={styleshift.button({ surface: 'outline' })}>Outline</button>
              <button className={styleshift.button({ surface: 'soft' })}>Soft</button>
              <button className={styleshift.button({ surface: 'ghost' })}>Ghost</button>
            </div>
          </StateSection>

          <StateSection id="button-radius" title="Button Radius">
            <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
              <button className={styleshift.button({ radius: 'none' })}>Square</button>
              <button className={styleshift.button({ radius: 'small' })}>Small</button>
              <button className={styleshift.button({ radius: 'medium' })}>Medium</button>
              <button className={styleshift.button({ radius: 'large' })}>Large</button>
              <button className={styleshift.button({ radius: 'full' })}>Full</button>
            </div>
          </StateSection>

          <StateSection id="button-colors" title="Button Colors">
            <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
              <button className={styleshift.button({ color: 'primary' })}>Primary</button>
              <button className={styleshift.button({ color: 'secondary' })}>Secondary</button>
              <button className={styleshift.button({ color: 'positive' })}>Positive</button>
              <button className={styleshift.button({ color: 'warning' })}>Warning</button>
              <button className={styleshift.button({ color: 'negative' })}>Negative</button>
              <button className={styleshift.button({ color: 'white' })}>Light</button>
              <button className={styleshift.button({ color: 'black' })}>Dark</button>
            </div>
          </StateSection>

          <StateSection id="button-sizes" title="Button Sizes">
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-gray-50">
              {['small', 'medium', 'large'].map((size) => (
                <button key={size} className={styleshift.button({ size })}>
                  {capitalize(size)}
                </button>
              ))}

              <button className={styleshift.button({ isFullWidth: true })}>Full Width</button>
            </div>
          </StateSection>

          <StateSection id="button-states" title="Button States">
            <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
              <button className={styleshift.button({ isDisabled: true })} aria-disabled="true">
                Disabled
              </button>
            </div>
          </StateSection>
        </div>
      )}
    </Preview>
  );
};

ButtonExamples.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
