declare const styleshift: {
 define: import('cva').CVA;
 compose: import('cva').Compose;
 merge: import('cva').CX;
 docs: (styles: Record<string, any>) => Record<string, any>;
};
export default styleshift;
