import { styleshift } from '../../../src/index.js';
import { StateSection, Preview } from '../components/Documentation.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CardExamples = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Preview id="card" title="Card" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div>
        <div className="p-3 rounded-lg bg-gray-50">
          <div className={styleshift.card()}>
            <p>This is a default card</p>
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
          <StateSection id="card-sizes" title="Card Sizes">
            <div className="space-y-4 p-3 rounded-lg bg-gray-50">
              {['tiny', 'small', 'medium', 'large', 'huge'].map((size) => (
                <div key={size} className={styleshift.card({ size })}>
                  <p>{size.charAt(0).toUpperCase() + size.slice(1)} card</p>
                </div>
              ))}
            </div>
          </StateSection>

          <StateSection id="card-variants" title="Card Variants">
            <div className="space-y-4 p-3 rounded-lg bg-gray-50">
              <div className={styleshift.card({ noBorder: true })}>
                <p>Card without border and shadow</p>
              </div>
            </div>
          </StateSection>
        </div>
      )}
    </Preview>
  );
};

CardExamples.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default CardExamples;
