import { useState } from 'react';

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
    <section id={id} className="bg-white p-6 rounded-lg transition-all duration-300">
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
  const [statusFilter, setStatusFilter] = useState('done');
  const [searchQuery, setSearchQuery] = useState('');

  const filterByStatus = (items) => {
    if (!items) return [];
    let filtered = items;

    if (statusFilter !== 'all') {
      filtered = filtered.filter((item) => item.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return filtered;
  };

  const countItems = (status) => {
    let total = 0;

    tableOfContents.forEach((section) => {
      if (section.subsections) {
        section.subsections.forEach((subsection) => {
          if (subsection.items) {
            total += subsection.items
              .filter((item) => (status === 'all' ? true : item.status === status))
              .filter((item) =>
                searchQuery ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true,
              ).length;
          }
        });
      } else if (section.items) {
        total += section.items
          .filter((item) => (status === 'all' ? true : item.status === status))
          .filter((item) => (searchQuery ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true)).length;
      }
    });

    return total;
  };

  const tableOfContents = [
    {
      title: 'Inputs',
      id: 'inputs',
      subsections: [
        {
          title: 'Single Inputs',
          id: 'single-inputs',
          items: [
            { title: 'Button', id: 'button', tags: ['button', 'input'], status: 'done' },
            { title: 'Checkbox', id: 'checkbox', tags: ['input'], status: 'todo' },
            { title: 'Input', id: 'input', tags: ['input'], status: 'todo' },
            { title: 'Number Field', id: 'number-field', tags: ['input'], status: 'todo' },
            { title: 'Radio', id: 'radio', tags: ['input'], status: 'todo' },
            { title: 'Select', id: 'select', tags: ['input'], status: 'todo' },
            { title: 'Slider', id: 'slider', tags: ['input'], status: 'todo' },
            { title: 'Stepper', id: 'stepper', tags: ['input'], status: 'todo' },
            { title: 'Switch', id: 'switch', tags: ['input'], status: 'todo' },
            { title: 'Textarea', id: 'textarea', tags: ['input'], status: 'todo' },
            { title: 'File Uploader', id: 'file-uploader', tags: ['input'], status: 'todo' },
            { title: 'Pin Code', id: 'pin-code', tags: ['input'], status: 'todo' },
            { title: 'Phone Input', id: 'phone-input', tags: ['input'], status: 'todo' },
            { title: 'Payment Card', id: 'payment-card', tags: ['input'], status: 'todo' },
          ],
        },
        {
          title: 'Composite Inputs',
          id: 'composite-inputs',
          items: [
            { title: 'Button Group', id: 'button-group', tags: ['input'], status: 'todo' },
            { title: 'Checkbox Group', id: 'checkbox-group', tags: ['input'], status: 'todo' },
            { title: 'Combobox', id: 'combobox', tags: ['input'], status: 'todo' },
            { title: 'Datepicker', id: 'datepicker', tags: ['input'], status: 'todo' },
            { title: 'Time Picker', id: 'time-picker', tags: ['input'], status: 'todo' },
            { title: 'Timezone Picker', id: 'timezone-picker', tags: ['input'], status: 'todo' },
            { title: 'Segmented Control', id: 'segmented-control', tags: ['input'], status: 'todo' },
          ],
        },
      ],
    },
    {
      title: 'Forms',
      id: 'forms',
      items: [
        { title: 'Form', id: 'form', tags: ['form'], status: 'todo' },
        { title: 'Field', id: 'field', tags: ['form'], status: 'todo' },
        { title: 'Fieldset', id: 'fieldset', tags: ['form'], status: 'todo' },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      subsections: [
        {
          title: 'Global',
          id: 'global-navigation',
          items: [
            { title: 'Header Navigation', id: 'header-navigation', tags: ['navigation'], status: 'todo' },
            { title: 'Mobile Header', id: 'mobile-header', tags: ['navigation'], status: 'todo' },
            { title: 'Bottom Navigation', id: 'bottom-navigation', tags: ['navigation'], status: 'todo' },
            { title: 'Side Navigation', id: 'side-navigation', tags: ['navigation'], status: 'todo' },
          ],
        },
        {
          title: 'Local',
          id: 'local-navigation',
          items: [
            { title: 'Breadcrumbs', id: 'breadcrumbs', tags: ['navigation'], status: 'todo' },
            { title: 'Tabs', id: 'tabs', tags: ['navigation'], status: 'todo' },
            { title: 'Page Control', id: 'page-control', tags: ['navigation'], status: 'todo' },
            { title: 'Pagination', id: 'pagination', tags: ['navigation'], status: 'todo' },
          ],
        },
        {
          title: 'Contextual',
          id: 'contextual-navigation',
          items: [
            { title: 'Link', id: 'link', tags: ['navigation'], status: 'done' },
            { title: 'Menu', id: 'menu', tags: ['navigation'], status: 'todo' },
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
            { title: 'Avatar', id: 'avatar', tags: ['content'], status: 'todo' },
            { title: 'Badge', id: 'badge', tags: ['content'], status: 'todo' },
            { title: 'Heading', id: 'heading', tags: ['content', 'typography'], status: 'todo' },
            { title: 'Tag', id: 'tag', tags: ['content'], status: 'todo' },
            { title: 'Text', id: 'text', tags: ['content', 'typography'], status: 'done' },
          ],
        },
        {
          title: 'Interactive',
          id: 'interactive-content',
          items: [
            { title: 'Accordion', id: 'accordion', tags: ['content'], status: 'todo' },
            { title: 'Collapsible', id: 'collapsible', tags: ['content'], status: 'todo' },
            { title: 'Drag and Drop List', id: 'drag-and-drop-list', tags: ['content'], status: 'todo' },
            { title: 'Preview Card', id: 'preview-card', tags: ['content'], status: 'todo' },
            { title: 'Message Card', id: 'message-card', tags: ['content'], status: 'todo' },
          ],
        },
        {
          title: 'Hierarchical',
          id: 'hierarchical-content',
          items: [
            { title: 'Tree View', id: 'tree-view', tags: ['content'], status: 'todo' },
            { title: 'Layout Grid', id: 'layout-grid', tags: ['content'], status: 'todo' },
            { title: 'Tile', id: 'tile', tags: ['content'], status: 'todo' },
            { title: 'List', id: 'list', tags: ['content'], status: 'todo' },
          ],
        },
      ],
    },
    {
      title: 'Feedback',
      id: 'feedback',
      items: [
        { title: 'Banner', id: 'banner', tags: ['feedback'], status: 'todo' },
        { title: 'Empty State', id: 'empty-state', tags: ['feedback'], status: 'todo' },
        { title: 'Notification', id: 'notification', tags: ['feedback'], status: 'todo' },
        { title: 'Progress', id: 'progress', tags: ['feedback'], status: 'todo' },
        { title: 'Progress Bar', id: 'progress-bar', tags: ['feedback'], status: 'todo' },
        { title: 'Progress Steps', id: 'progress-steps', tags: ['feedback'], status: 'todo' },
        { title: 'Skeleton', id: 'skeleton', tags: ['feedback'], status: 'todo' },
        { title: 'Snackbar', id: 'snackbar', tags: ['feedback'], status: 'todo' },
        { title: 'Spinner', id: 'spinner', tags: ['feedback'], status: 'todo' },
        { title: 'Toast', id: 'toast', tags: ['feedback'], status: 'todo' },
      ],
    },
    {
      title: 'Surfaces',
      id: 'surfaces',
      items: [
        { title: 'Card', id: 'card', tags: ['surface'], status: 'todo' },
        { title: 'Drawer', id: 'drawer', tags: ['surface'], status: 'todo' },
        { title: 'Modal', id: 'modal', tags: ['surface'], status: 'todo' },
        { title: 'Popover', id: 'popover', tags: ['surface'], status: 'todo' },
        { title: 'Tooltip', id: 'tooltip', tags: ['surface'], status: 'done' },
      ],
    },
    {
      title: 'Tables',
      id: 'tables',
      items: [
        { title: 'Table', id: 'table', tags: ['table'], status: 'todo' },
        { title: 'Data Table', id: 'data-table', tags: ['table'], status: 'todo' },
      ],
    },
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 bg-white p-4 overflow-y-auto">
      <div className="mb-4">
        <input
          type="search"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 text-sm border rounded-md 
            placeholder-gray-400 focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4 flex gap-1">
        <button
          onClick={() => setStatusFilter('done')}
          className={`px-2 py-1 text-xs rounded-md transition-colors duration-150
            ${
              statusFilter === 'done'
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          Done ({countItems('done')})
        </button>
        <button
          onClick={() => setStatusFilter('all')}
          className={`px-2 py-1 text-xs rounded-md transition-colors duration-150
            ${
              statusFilter === 'all'
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          All ({countItems('all')})
        </button>
        <button
          onClick={() => setStatusFilter('todo')}
          className={`px-2 py-1 text-xs rounded-md transition-colors duration-150
            ${
              statusFilter === 'todo'
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          Todo ({countItems('todo')})
        </button>
      </div>

      <nav className="space-y-4">
        {tableOfContents.map((section) => {
          const filteredSection = { ...section };

          if (section.subsections) {
            filteredSection.subsections = section.subsections
              .map((subsection) => ({
                ...subsection,
                items: filterByStatus(subsection.items),
              }))
              .filter((subsection) => subsection.items.length > 0);

            if (filteredSection.subsections.length === 0) return null;
          } else if (section.items) {
            filteredSection.items = filterByStatus(section.items);
            if (filteredSection.items.length === 0) return null;
          }

          return (
            <div key={section.id} className="space-y-2">
              <h2 className="font-semibold text-gray-900 text-base tracking-tight">{section.title}</h2>

              {filteredSection.subsections ? (
                <div className="ml-2">
                  {filteredSection.subsections.map((subsection) => (
                    <div key={subsection.id} className="mb-2">
                      <h3 className="text-xs font-medium text-gray-700 mb-1">{subsection.title}</h3>

                      <div className="space-y-0.5 ml-1">
                        {subsection.items.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`
                              block py-1 px-2 text-xs rounded-md
                              transition-colors duration-150
                              ${
                                visibleSections.has(item.id)
                                  ? 'bg-blue-50 text-blue-600 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }
                            `}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.title}</span>
                              {statusFilter === 'all' &&
                                (item.status === 'todo' ? (
                                  <span className="text-[10px] px-1 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                                    Todo
                                  </span>
                                ) : (
                                  <span className="text-[10px] px-1 py-0.5 bg-green-100 text-green-700 rounded-full">
                                    Done
                                  </span>
                                ))}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-0.5 ml-1">
                  {filteredSection.items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`
                        block py-1 px-2 text-xs rounded-md
                        transition-colors duration-150
                        ${
                          visibleSections.has(item.id)
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.title}</span>
                        {statusFilter === 'all' &&
                          (item.status === 'todo' ? (
                            <span className="text-[10px] px-1 py-0.5 bg-gray-100 text-gray-600 rounded-full">Todo</span>
                          ) : (
                            <span className="text-[10px] px-1 py-0.5 bg-green-100 text-green-700 rounded-full">
                              Done
                            </span>
                          ))}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
