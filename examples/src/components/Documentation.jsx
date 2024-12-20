export const Header = () => {
  return (
    <header className="mb-12">
      <h1 className="text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
        Components
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
        A comprehensive library of beautifully crafted styleshift components. From surface styles and color variations
        to size options and states, discover the perfect components for your interface design needs.
      </p>
    </header>
  );
};

export const StateSection = ({ id, title, children }) => {
  return (
    <div id={id}>
      <h3 className="text-lg font-medium text-gray-700 mb-3">{title}</h3>
      {children}
    </div>
  );
};

export const Card = ({ id, title, children, tags }) => {
  return (
    <section id={id} className="bg-white p-6 rounded-2xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {tags && tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

export const Sidebar = ({ activeSection, visibleSections }) => {
  const tableOfContents = [
    {
      title: 'Inputs',
      id: 'inputs',
      subsections: [
        {
          title: 'Single Inputs',
          id: 'single-inputs',
          items: [
            { title: 'Button', id: 'button', tags: ['button', 'input'] },
            // { title: 'Checkbox', id: 'checkbox', tags: ['input'] },
            // { title: 'Input', id: 'input', tags: ['input'] },
            // { title: 'Number Field', id: 'number-field', tags: ['input'] },
            // { title: 'Radio', id: 'radio', tags: ['input'] },
            // { title: 'Select', id: 'select', tags: ['input'] },
            // { title: 'Slider', id: 'slider', tags: ['input'] },
            // { title: 'Stepper', id: 'stepper', tags: ['input'] },
            // { title: 'Switch', id: 'switch', tags: ['input'] },
            // { title: 'Textarea', id: 'textarea', tags: ['input'] },
            // { title: 'File Uploader', id: 'file-uploader', tags: ['input'] },
            // { title: 'Pin Code', id: 'pin-code', tags: ['input'] },
            // { title: 'Phone Input', id: 'phone-input', tags: ['input'] },
            // { title: 'Payment Card', id: 'payment-card', tags: ['input'] }
          ],
        },
        // {
        //   title: 'Composite Inputs',
        //   id: 'composite-inputs',
        //   items: [
        //     { title: 'Button Group', id: 'button-group', tags: ['input'] },
        //     { title: 'Checkbox Group', id: 'checkbox-group', tags: ['input'] },
        //     { title: 'Combobox', id: 'combobox', tags: ['input'] },
        //     { title: 'Datepicker', id: 'datepicker', tags: ['input'] },
        //     { title: 'Time Picker', id: 'time-picker', tags: ['input'] },
        //     { title: 'Timezone Picker', id: 'timezone-picker', tags: ['input'] },
        //     { title: 'Segmented Control', id: 'segmented-control', tags: ['input'] }
        //   ]
        // }
      ],
    },
    // {
    //   title: 'Forms',
    //   id: 'forms',
    //   items: [
    //     { title: 'Form', id: 'form', tags: ['form'] },
    //     { title: 'Field', id: 'field', tags: ['form'] },
    //     { title: 'Fieldset', id: 'fieldset', tags: ['form'] }
    //   ]
    // },
    {
      title: 'Navigation',
      id: 'navigation',
      subsections: [
        // {
        //   title: 'Global',
        //   id: 'global-navigation',
        //   items: [
        //     { title: 'Header Navigation', id: 'header-navigation', tags: ['navigation'] },
        //     { title: 'Mobile Header', id: 'mobile-header', tags: ['navigation'] },
        //     { title: 'Bottom Navigation', id: 'bottom-navigation', tags: ['navigation'] },
        //     { title: 'Side Navigation', id: 'side-navigation', tags: ['navigation'] }
        //   ]
        // },
        // {
        //   title: 'Local',
        //   id: 'local-navigation',
        //   items: [
        //     { title: 'Breadcrumbs', id: 'breadcrumbs', tags: ['navigation'] },
        //     { title: 'Tabs', id: 'tabs', tags: ['navigation'] },
        //     { title: 'Page Control', id: 'page-control', tags: ['navigation'] },
        //     { title: 'Pagination', id: 'pagination', tags: ['navigation'] }
        //   ]
        // },
        {
          title: 'Contextual',
          id: 'contextual-navigation',
          items: [
            { title: 'Link', id: 'link', tags: ['navigation'] },
            // { title: 'Menu', id: 'menu', tags: ['navigation'] }
          ],
        },
      ],
    },
    {
      title: 'Content',
      id: 'content',
      subsections: [
        {
          title: 'Static',
          id: 'static-content',
          items: [
            // { title: 'Avatar', id: 'avatar', tags: ['content'] },
            // { title: 'Badge', id: 'badge', tags: ['content'] },
            // { title: 'Heading', id: 'heading', tags: ['content', 'typography'] },
            // { title: 'Tag', id: 'tag', tags: ['content'] },
            { title: 'Text', id: 'text', tags: ['content', 'typography'] },
          ],
        },
        // {
        //   title: 'Interactive',
        //   id: 'interactive-content',
        //   items: [
        //     { title: 'Accordion', id: 'accordion', tags: ['content'] },
        //     { title: 'Collapsible', id: 'collapsible', tags: ['content'] },
        //     { title: 'Drag and Drop List', id: 'drag-and-drop-list', tags: ['content'] },
        //     { title: 'Preview Card', id: 'preview-card', tags: ['content'] },
        //     { title: 'Message Card', id: 'message-card', tags: ['content'] }
        //   ]
        // },
        // {
        //   title: 'Hierarchical',
        //   id: 'hierarchical-content',
        //   items: [
        //     { title: 'Tree View', id: 'tree-view', tags: ['content'] },
        //     { title: 'Layout Grid', id: 'layout-grid', tags: ['content'] },
        //     { title: 'Tile', id: 'tile', tags: ['content'] },
        //     { title: 'List', id: 'list', tags: ['content'] }
        //   ]
        // }
      ],
    },
    // {
    //   title: 'Feedback',
    //   id: 'feedback',
    //   items: [
    //     { title: 'Banner', id: 'banner', tags: ['feedback'] },
    //     { title: 'Empty State', id: 'empty-state', tags: ['feedback'] },
    //     { title: 'Notification', id: 'notification', tags: ['feedback'] },
    //     { title: 'Progress', id: 'progress', tags: ['feedback'] },
    //     { title: 'Progress Bar', id: 'progress-bar', tags: ['feedback'] },
    //     { title: 'Progress Steps', id: 'progress-steps', tags: ['feedback'] },
    //     { title: 'Skeleton', id: 'skeleton', tags: ['feedback'] },
    //     { title: 'Snackbar', id: 'snackbar', tags: ['feedback'] },
    //     { title: 'Spinner', id: 'spinner', tags: ['feedback'] },
    //     { title: 'Toast', id: 'toast', tags: ['feedback'] }
    //   ]
    // },
    {
      title: 'Surfaces',
      id: 'surfaces',
      items: [
        // { title: 'Card', id: 'card', tags: ['surface'] },
        // { title: 'Drawer', id: 'drawer', tags: ['surface'] },
        // { title: 'Modal', id: 'modal', tags: ['surface'] },
        // { title: 'Popover', id: 'popover', tags: ['surface'] },
        { title: 'Tooltip', id: 'tooltip', tags: ['surface'] },
      ],
    },
    // {
    //   title: 'Tables',
    //   id: 'tables',
    //   items: [
    //     { title: 'Table', id: 'table', tags: ['table'] },
    //     { title: 'Data Table', id: 'data-table', tags: ['table'] }
    //   ]
    // }
  ];

  return (
    <aside className="w-72 h-screen sticky top-0 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <nav className="space-y-6">
        {tableOfContents.map((section) => (
          <div key={section.id} className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-[2px] bg-gray-300"></div>
              <h2 className="font-semibold text-gray-900 text-lg tracking-tight">{section.title}</h2>
            </div>

            {section.subsections ? (
              <div className="space-y-4 ml-3">
                {section.subsections.map((subsection) => (
                  <div key={subsection.id} className="space-y-2">
                    <div className="flex items-center gap-2 pl-2">
                      <div className="h-3 w-[2px] bg-gray-200"></div>
                      <h3 className="text-sm font-medium text-gray-700">{subsection.title}</h3>
                    </div>

                    <div className="space-y-1 ml-4 border-l border-gray-100">
                      {subsection.items.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`
                            block pl-4 py-1 text-sm relative hover:bg-gray-50 rounded-r-lg
                            transition-colors duration-150
                            ${
                              visibleSections.has(item.id)
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-600 hover:text-gray-900'
                            }
                            before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                            before:w-[1px] before:h-full before:bg-gray-100
                          `}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-1 ml-4 border-l border-gray-100">
                {section.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      block pl-4 py-1 text-sm relative hover:bg-gray-50 rounded-r-lg
                      transition-colors duration-150
                      ${
                        visibleSections.has(item.id) ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                      }
                      before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                      before:w-[1px] before:h-full before:bg-gray-100
                    `}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
