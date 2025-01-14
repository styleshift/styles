import styleshift from '../../styleshift';
import linkStyles from '../../link.styles';
import { canFocus } from '../focus';

const link = {
 root: styleshift.compose(canFocus, styleshift.define(linkStyles.root)),
};

const linkDocs = styleshift.docs(linkStyles);

export { link, linkDocs, linkStyles };
