import styleshift from '../styleshift';

// Helper function to generate docs from styles
function generateDocsFromStyles(styles: Record<string, any>) {
 const docs: Record<string, any> = {};

 for (const [partName, partStyles] of Object.entries(styles)) {
  docs[partName] = {
   variants: partStyles.variants
    ? Object.fromEntries(
       Object.entries(partStyles.variants).map(
        ([variantName, variantOptions]) => [
         variantName,
         Object.keys(variantOptions),
        ],
       ),
      )
    : {},
  };
 }

 return docs;
}

const alertStyles = {
 root: {
  base: ['relative', 'w-full', 'rounded-lg', 'border', 'p-4', 'transition-all'],
  variants: {
   surface: {
    default: ['border-slate-500', 'text-slate-800'],
    negative: ['border-red-500', 'text-red-800'],
    positive: ['border-green-500', 'text-green-800'],
   },
  },
  defaultVariants: {
   surface: 'default',
  },
 },
 title: {
  base: ['mb-1', 'font-medium', 'leading-none', 'tracking-tight'],
 },
 description: {
  base: ['text-sm', 'opacity-90'],
 },
} as const;

const alertDocs = generateDocsFromStyles(alertStyles);

const alert = {
 root: styleshift.define(alertStyles.root),
 title: styleshift.define(alertStyles.title),
 description: styleshift.define(alertStyles.description),
};

export { alert, alertDocs, alertStyles };
