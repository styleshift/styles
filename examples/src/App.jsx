import { useEffect, useState } from 'react';
import { LinkExamples } from './examples/LinkExamples.jsx';
import { TooltipExamples } from './examples/TooltipExamples.jsx';
import { ButtonExamples } from './examples/ButtonExamples.jsx';
import { ButtonDockExamples } from './examples/ButtonDockExamples.jsx';
import { TextExamples } from './examples/TextExamples.jsx';
import { Sidebar } from './components/Documentation.jsx';
import CardExamples from './examples/CardExamples.jsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      },
    );

    document.querySelectorAll('[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" style={{ scrollBehavior: 'smooth' }}>
      <div className="flex">
        <Sidebar activeSection={activeSection} visibleSections={visibleSections} />
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-7xl px-8 pt-8 pb-96">
            {/* <Header /> */}
            <div className="space-y-12">
              <ButtonExamples tags={['button', 'input']} />
              <ButtonDockExamples tags={['button', 'input']} />
              <CardExamples tags={['card', 'layout']} />
              <LinkExamples tags={['link', 'navigation']} />
              <TextExamples tags={['text', 'typography', 'content']} />
              <TooltipExamples tags={['tooltip', 'content']} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
