import { styleshift } from '../../../src/utils/factories.js';
import { Tooltip } from '@base-ui-components/react/tooltip';
import { Card, StateSection } from '../components/Documentation.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SvgArrow = () => (
  <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
    <path
      d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
      className="fill-[canvas]"
    />
    <path
      d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
      className="fill-gray-200 dark:fill-none"
    />
    <path
      d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
      className="dark:fill-gray-300"
    />
  </svg>
);

export const TooltipExample = ({ label, tooltip }) => {
  const { trigger, arrow, popup } = styleshift.tooltip();
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className={trigger()}>{label}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup className={popup()}>
              <Tooltip.Arrow className={arrow()}>
                <SvgArrow />
              </Tooltip.Arrow>
              {tooltip}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

TooltipExample.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export const TooltipExamples = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Card id="tooltip" title="Tooltip" tags={tags} isCollapsible={true} isCollapsed={isCollapsed}>
      <div onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="flex flex-wrap gap-3 p-4 rounded-lg bg-gray-50">
          <TooltipExample label="Hover me!" tooltip="Hello, this is a tooltip!" />
        </div>

        {isCollapsed && <div className="mt-4 text-black underline cursor-pointer">Show Variants</div>}
      </div>
      {!isCollapsed && (
        <div className="space-y-8 mt-4">
          <StateSection id="tooltip-examples" title="Examples">
            <div className="flex flex-wrap gap-4 p-4 rounded-lg bg-gray-50">
              <TooltipExample label="Hover me!" tooltip="Hello, this is a tooltip!" />
              <TooltipExample
                label="With long content"
                tooltip="This is a tooltip with longer content to show how it wraps"
              />
              <TooltipExample label="Custom styling" tooltip="Styled tooltip" />
            </div>
          </StateSection>
        </div>
      )}
    </Card>
  );
};

TooltipExamples.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
