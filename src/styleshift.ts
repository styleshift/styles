import { cva, compose, cx } from 'cva';

const generateDocsFromStyles = (styles: Record<string, any>) => {
 const docs: Record<string, any> = {};

 for (const [partName, partStyles] of Object.entries(styles)) {
  docs[partName] = {
   variants: partStyles.variants
    ? Object.fromEntries(
       Object.entries(partStyles.variants).map(
        ([variantName, variantOptions]) => [
         variantName,
         Object.keys(variantOptions as any),
        ],
       ),
      )
    : {},
  };
 }

 return docs;
};

const styleshift = {
 define: cva,
 compose: compose,
 merge: cx,
 docs: generateDocsFromStyles,
};

export default styleshift;
