import * as classVarianceAuthority from 'cva';
/**
 * Utility wrapper around class-variance-authority for type-safe className generation
 * @typedef {Object} StyleShift
 * @property {function} define - Creates variant-based className generators
 * @property {function} compose - Combines multiple variant definitions
 * @property {function} merge - Merges multiple className strings
 *
 * @example
 * const button = styleshift.define({
 *   base: "px-4 py-2 rounded",
 *   variants: {
 *     intent: {
 *       primary: "bg-blue-500 text-white",
 *       secondary: "bg-gray-200 text-gray-800"
 *     },
 *     size: {
 *       sm: "text-sm",
 *       lg: "text-lg"
 *     }
 *   }
 * });
 */
declare const styleshift: {
  define: classVarianceAuthority.CVA;
  compose: classVarianceAuthority.Compose;
  merge: classVarianceAuthority.CX;
};
export default styleshift;
