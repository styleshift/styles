import { styleshift } from '../../../src/utils/factories.js';
import { Card, StateSection } from '../components/Documentation.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const TextGrid = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Card id="text" title="Text" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div>
        <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
          <p className={styleshift.text()}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {isCollapsed && (
          <div onClick={() => setIsCollapsed(!isCollapsed)} className="mt-3 text-black underline cursor-pointer">
            Show Variants
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="space-y-4 mt-3">
          <StateSection id="text-sizes" title="Sizes">
            <div className="space-y-3">
              {['tiny', 'small', 'default', 'medium', 'large'].map((size) => (
                <div key={size} className="flex items-center gap-2">
                  <span className="w-12 text-sm text-gray-500">{size}:</span>
                  <p className={styleshift.text({ size })}>The quick brown fox jumps over the lazy dog</p>
                </div>
              ))}
            </div>
          </StateSection>
        </div>
      )}
    </Card>
  );
};

TextGrid.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
