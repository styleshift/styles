import { StateSection, Preview } from '../components/Documentation.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { styleshift } from '../../../src/index.js';

export const ButtonDockExamples = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Preview id="button-dock" title="Button Dock" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div>
        <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
          <div className={styleshift.buttonDock()}>
            <button className={styleshift.button()}>Save</button>
            <button className={styleshift.button({ surface: 'soft' })}>Cancel</button>
          </div>
        </div>

        {isCollapsed && (
          <div onClick={() => setIsCollapsed(!isCollapsed)} className="mt-3 text-black underline cursor-pointer">
            Show Variants
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="space-y-4 mt-3">
          <StateSection id="button-dock-spacing" title="Button Dock Spacing">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'none' })}>
                  <button className={styleshift.button()}>No</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'tiny' })}>
                  <button className={styleshift.button()}>Tiny</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'small' })}>
                  <button className={styleshift.button()}>Small</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'default' })}>
                  <button className={styleshift.button()}>Default</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'medium' })}>
                  <button className={styleshift.button()}>Medium</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'large' })}>
                  <button className={styleshift.button()}>Large</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
                <div className={styleshift.buttonDock({ spacing: 'huge' })}>
                  <button className={styleshift.button()}>Huge</button>
                  <button className={styleshift.button()}>Spacing</button>
                </div>
              </div>
            </div>
          </StateSection>
        </div>
      )}
    </Preview>
  );
};

ButtonDockExamples.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
