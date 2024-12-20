import { styleshift } from '../../../src/utils/factories.js';
import { Card, StateSection } from '../components/Documentation.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const TextGrid = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Card id="text" title="Text" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="flex flex-wrap gap-3 p-4 rounded-lg bg-gray-50">
          <p className={styleshift.text()}></p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odio alias odit saepe. Nulla enim, magnam alias
          debitis fuga quidem facere pariatur optio est quo harum ex id earum temporibus.
        </div>

        {isCollapsed && <div className="mt-4 text-black underline cursor-pointer">Show Variants</div>}
      </div>
      {!isCollapsed && (
        <div className="space-y-8 mt-4">
          <StateSection id="text-sizes" title="Sizes">
            <div className="space-y-6">
              {['tiny', 'small', 'default', 'medium', 'large'].map((size) => (
                <div key={size} className="flex items-center gap-3">
                  <span className="w-16 text-sm text-gray-500">{size}:</span>
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
