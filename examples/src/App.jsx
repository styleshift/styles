import { styleshift } from '../../src/utils/factories.js';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Adjusts the intersection viewport
      },
    );

    // Observe all section elements
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" style={{ scrollBehavior: 'smooth' }}>
      <div className="flex">
        <Sidebar activeSection={activeSection} />
        <main className="flex-1 py-16 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Header />
            <ButtonGrid />
            <LinkGrid />
            <TextGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

function TextGrid() {
  return (
    <section id="text">
      <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 mt-16">Text</h2>
      <div className="flex flex-col gap-4">
        <Card id="text-sizes" title="Sizes">
          <TextSizeVariants />
        </Card>
        <Card id="text-weights" title="Weights">
          <TextWeightVariants />
        </Card>
      </div>
    </section>
  );
}

function TextSizeVariants() {
  const sizes = ['tiny', 'small', 'default', 'medium', 'large', 'huge'];

  return (
    <div className="flex flex-col gap-6">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-3">
          <p className={styleshift.text({ size })}>This is a sample text with the {size} size.</p>
        </div>
      ))}
    </div>
  );
}

function TextWeightVariants() {
  const weights = ['thin', 'normal', 'medium', 'semibold', 'bold'];

  return (
    <div className="flex flex-col gap-6">
      {weights.map((weight) => (
        <div key={weight} className="flex flex-col gap-3">
          <p className={styleshift.text({ weight })}>This is a sample text with the {weight} weight.</p>
        </div>
      ))}
    </div>
  );
}

function Header() {
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
}

function ButtonGrid() {
  return (
    <section id="buttons">
      <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Buttons</h2>
      <div className="flex flex-col gap-4">
        <Card id="color-system" title="Color System">
          <ColorVariants />
        </Card>
        <Card id="size-scale" title="Size Scale">
          <SizeVariants />
        </Card>
        <Card id="surface-variants" title="Surface Variants">
          <SurfaceVariants />
        </Card>
        <Card id="corner-smoothness" title="Corner Smoothness">
          <SmoothnessVariants />
        </Card>
        <Card id="button-states" title="Button States">
          <StateVariants />
        </Card>
      </div>
    </section>
  );
}

function SurfaceVariants() {
  const surfaces = ['solid', 'outline', 'soft', 'ghost'];
  const colors = ['primary', 'secondary', 'positive', 'negative', 'warning', 'black'];

  return (
    <div className="flex flex-col gap-6">
      {surfaces.map((surface) => (
        <div key={surface} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{surface}</h3>
          <div className={`flex flex-wrap items-center gap-3 p-4 rounded-lg bg-gray-50`}>
            {colors.map((color) => (
              <button key={`${surface}-${color}`} className={styleshift.button({ surface, color })}>
                {capitalize(color)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ColorVariants() {
  const surfaces = ['solid', 'outline', 'soft', 'ghost'];
  const colors = ['primary', 'secondary', 'positive', 'negative', 'warning', 'black', 'white'];

  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <div key={color} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{color}</h3>
          <div className={`flex flex-wrap items-center gap-3 p-4 rounded-lg bg-gray-50`}>
            {surfaces.map((surface) => (
              <button key={`${color}-${surface}`} className={styleshift.button({ surface, color })}>
                {capitalize(surface)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SizeVariants() {
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
  const surfaces = ['solid', 'outline', 'soft'];

  return (
    <div className="space-y-6">
      {surfaces.map((surface) => (
        <div key={surface} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{surface}</h3>
          <div className={`flex flex-wrap items-center gap-3 p-4 rounded-lg bg-gray-50`}>
            {sizes.map((size) => (
              <button key={size} className={styleshift.button({ size, surface })}>
                {capitalize(size)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SmoothnessVariants() {
  const radiusOptions = ['none', 'tiny', 'small', 'medium', 'large', 'huge', 'full'];
  const surfaces = ['solid', 'outline'];

  return (
    <div className="space-y-6">
      {surfaces.map((surface) => (
        <div key={surface} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{surface}</h3>
          <div className={`flex flex-wrap items-center gap-3 p-4 rounded-lg bg-gray-50`}>
            {radiusOptions.map((radius) => (
              <button key={radius} className={styleshift.button({ radius, surface })}>
                {capitalize(radius)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function StateVariants() {
  return (
    <div className="space-y-6">
      <StateSection title="Full Width Buttons">
        <div className="space-y-3">
          <button className={styleshift.button({ isFullWidth: true })}>Default Full Width</button>
          <button className={styleshift.button({ isFullWidth: true, surface: 'outline' })}>Outline Full Width</button>
        </div>
      </StateSection>

      <StateSection title="Disabled State">
        <div className="flex flex-wrap gap-3">
          <button className={styleshift.button({ isDisabled: true })} aria-disabled="true">
            Default Disabled
          </button>
          <button className={styleshift.button({ isDisabled: true, surface: 'outline' })} aria-disabled="true">
            Outline Disabled
          </button>
          <button className={styleshift.button({ isDisabled: true, surface: 'soft' })} aria-disabled="true">
            Soft Disabled
          </button>
        </div>
      </StateSection>

      <StateSection title="With Icons">
        <div className="flex flex-wrap gap-3">
          <button className={styleshift.button()}>Next Step →</button>
          <button className={styleshift.button({ surface: 'outline' })}>← Back</button>
          <button className={styleshift.button({ surface: 'soft' })}>Settings ⚙️</button>
        </div>
      </StateSection>
    </div>
  );
}

function LinkGrid() {
  return (
    <section id="links">
      <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 mt-16">Links</h2>
      <div className="flex flex-col gap-4">
        <Card id="links" title="Links">
          <LinkVariants />
        </Card>
        <Card id="link-sizes" title="Link Sizes">
          <LinkSizeVariants />
        </Card>
        <Card id="link-underline-styles" title="Link Underline Styles">
          <LinkUnderlineVariants />
        </Card>
        <Card id="link-states" title="Link States">
          <LinkStateVariants />
        </Card>
      </div>
    </section>
  );
}

function LinkVariants() {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning'];

  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <div key={color} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{color}</h3>
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-lg bg-gray-50">
            <a href="#" className={styleshift.link({ color })}>
              Regular Link
            </a>
            <a href="#" className={styleshift.link({ color, underline: 'always' })}>
              Underlined Link
            </a>
            <a href="#" className={styleshift.link({ color })} data-pressed="true">
              Pressed State
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function LinkSizeVariants() {
  const sizes = ['tiny', 'small', 'default', 'medium', 'large', 'huge'];
  const colors = ['primary', 'secondary'];

  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <div key={color} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{color}</h3>
          <div className="flex flex-wrap items-baseline gap-6 p-4 rounded-lg bg-gray-50">
            {sizes.map((size) => (
              <a key={size} href="#" className={styleshift.link({ size, color })}>
                {capitalize(size)} Size
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LinkUnderlineVariants() {
  const underlineStyles = ['none', 'hover', 'always'];
  const colors = ['primary', 'secondary', 'success'];

  return (
    <div className="flex flex-col gap-6">
      {colors.map((color) => (
        <div key={color} className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-gray-700 capitalize">{color}</h3>
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-lg bg-gray-50">
            {underlineStyles.map((style) => (
              <a key={style} href="#" className={styleshift.link({ underline: style, color })}>
                {capitalize(style)} Underline
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LinkStateVariants() {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning'];

  return (
    <div className="space-y-6">
      <StateSection title="Disabled States">
        <div className="flex flex-wrap gap-6 p-4 rounded-lg bg-gray-50">
          {colors.map((color) => (
            <a key={color} href="#" className={styleshift.link({ isDisabled: true, color })} aria-disabled="true">
              {capitalize(color)} Disabled
            </a>
          ))}
        </div>
      </StateSection>

      <StateSection title="With Icons">
        <div className="flex flex-wrap gap-6 p-4 rounded-lg bg-gray-50">
          <a href="#" className={styleshift.link()}>
            Link with Icon →
          </a>
          <a href="#" className={styleshift.link({ color: 'secondary' })}>
            ← Back to Home
          </a>
        </div>
      </StateSection>

      <StateSection title="Animation Control">
        <div className="flex flex-wrap gap-6 p-4 rounded-lg bg-gray-50">
          <a href="#" className={styleshift.link()}>
            With Animation
          </a>
          <a href="#" className={styleshift.link({ disableAnimation: true })}>
            No Animation
          </a>
        </div>
      </StateSection>
    </div>
  );
}

function StateSection({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Card({ id, title, children }) {
  return (
    <section
      id={id}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Sidebar({ activeSection }) {
  const sections = [
    {
      title: 'Buttons',
      items: [
        { label: 'Color', href: '#color-system' },
        { label: 'Size', href: '#size-scale' },
        { label: 'Surface', href: '#surface-variants' },
        { label: 'Corner', href: '#corner-smoothness' },
        { label: 'States', href: '#button-states' },
      ],
    },
    {
      title: 'Links',
      items: [
        { label: 'Color', href: '#links' },
        { label: 'Size', href: '#link-sizes' },
        { label: 'Underline', href: '#link-underline-styles' },
        { label: 'States', href: '#link-states' },
      ],
    },
    {
      title: 'Text',
      items: [
        { label: 'Sizes', href: '#text-sizes' },
        { label: 'Weights', href: '#text-weights' },
      ],
    },
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 bg-white border-r border-gray-200 p-6 shadow-lg">
      <nav className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-gray-900 mb-3 text-base">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styleshift.link({
                      color: item.href.slice(1) === activeSection ? 'primary' : 'secondary',
                      size: 'small',
                      underline: 'none',
                    })}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

// Utility function for capitalizing strings
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default App;
