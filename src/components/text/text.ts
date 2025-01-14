import styleshift from '../../styleshift';
import textStyles from '../../text.styles';

const text = {
 root: styleshift.define(textStyles.root),
};

const textDocs = styleshift.docs(textStyles);

export { text, textDocs, textStyles };
