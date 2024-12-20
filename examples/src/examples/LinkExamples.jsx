import { styleshift } from '../../../src/utils/factories.js';
import { Card, StateSection } from '../components/Documentation.jsx';
import { capitalize } from '../utils/capitalize.js';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const LinkGrid = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Card id="link" title="Link" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div>
        <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
          <a href="https://google.com" className={styleshift.link()}>
            Go to Google
          </a>
        </div>

        {isCollapsed && (
          <div onClick={() => setIsCollapsed(!isCollapsed)} className="mt-3 text-black underline cursor-pointer">
            Show Variants
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="space-y-4 mt-3">
          <CompactLinkVariants />
          <LinkStateVariants />
        </div>
      )}
    </Card>
  );
};

LinkGrid.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

const CompactLinkVariants = () => {
  const colors = ['primary', 'secondary', 'success', 'danger'];
  const underlineStyles = ['none', 'hover', 'always'];
  const sizes = ['small', 'default', 'large'];

  return (
    <div className="space-y-3">
      <StateSection id="link-colors" title="Colors">
        <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
          {colors.map((color) => (
            <a key={color} href="#" className={styleshift.link({ color })}>
              {capitalize(color)}
            </a>
          ))}
        </div>
      </StateSection>

      <StateSection id="link-underlines" title="Underlines">
        <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-gray-50">
          {underlineStyles.map((style) => (
            <a key={style} href="#" className={styleshift.link({ underline: style })}>
              {capitalize(style)}
            </a>
          ))}
        </div>
      </StateSection>

      <StateSection id="link-sizes" title="Sizes">
        <div className="flex flex-wrap items-baseline gap-2 p-3 rounded-lg bg-gray-50">
          {sizes.map((size) => (
            <a key={size} href="#" className={styleshift.link({ size })}>
              {capitalize(size)} Size
            </a>
          ))}
        </div>
      </StateSection>
    </div>
  );
};

const LinkStateVariants = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning'];

  return (
    <div className="space-y-6">
      <StateSection id="link-disabled" title="Disabled States">
        <div className="flex flex-wrap gap-6 p-4 rounded-lg bg-gray-50">
          {colors.map((color) => (
            <a key={color} href="#" className={styleshift.link({ isDisabled: true, color })} aria-disabled="true">
              {capitalize(color)} Disabled
            </a>
          ))}
        </div>
      </StateSection>

      <StateSection id="link-icons" title="With Icons">
        <div className="flex flex-wrap gap-6 p-4 rounded-lg bg-gray-50">
          <a href="#" className={styleshift.link()}>
            Link with Icon →
          </a>
          <a href="#" className={styleshift.link({ color: 'secondary' })}>
            ← Back to Home
          </a>
        </div>
      </StateSection>
    </div>
  );
};
