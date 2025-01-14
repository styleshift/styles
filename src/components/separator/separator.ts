import styleshift from '../../styleshift';
import separatorStyles from '../../separator.styles';

const separator = {
 root: styleshift.define(separatorStyles.root as any),
};

const separatorDocs = styleshift.docs(separatorStyles);

export { separator, separatorDocs, separatorStyles };
