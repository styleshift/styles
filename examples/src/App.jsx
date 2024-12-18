import { styleshift } from '../../src/utils/factories.js';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Header />
        <ButtonGrid />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="mb-16">
      <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">Buttons</h1>
      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
        A comprehensive library of beautifully crafted button styleshift. From surface styles and color variations to
        size options and states, discover the perfect button for your interface design needs.
      </p>
    </header>
  );
}

function ButtonGrid() {
  return (
    <div className="flex flex-col gap-8">
      <Card title="Surface Variants">
        <SurfaceVariants />
      </Card>
      <Card title="Color System">
        <ColorVariants />
      </Card>
      <Card title="Size Scale">
        <SizeVariants />
      </Card>
      <Card title="Corner Smoothness">
        <SmoothnessVariants />
      </Card>
      <Card title="Button States">
        <StateVariants />
      </Card>
    </div>
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

function Card({ title, children }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      {children}
    </section>
  );
}

// Utility function for capitalizing strings
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default App;
