import { TooltipExample } from '../examples/TooltipExamples';
import { styleshift } from '../../../src/utils/factories';

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
      title: 'Button',
      tags: ['button', 'input'],
      id: 'buttons',
    },
    {
      title: 'Link',
      tags: ['link', 'navigation'],
      id: 'links',
    },
    {
      title: 'Text',
      id: 'text',
      tags: ['text', 'typography', 'content'],
    },
    {
      title: 'Tooltip',
      id: 'tooltips',
      tags: ['tooltip', 'content'],
    },
  ];

  return (
    <aside className="w-56 h-screen sticky top-0 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">
        {tableOfContents.map((section) => (
          <div key={section.id}>
            <a
              href={`#${section.id}`}
              className={styleshift.link({
                color: visibleSections.has(section.id) ? 'primary' : 'secondary',
                weight: visibleSections.has(section.id) ? 'bold' : 'semibold',
                underline: 'none',
              })}
            >
              {section.title}
            </a>
          </div>
        ))}
      </nav>
    </aside>
  );
};
