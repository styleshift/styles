import styleshift from '../styleshift';
import { canFocus } from './focus';
import linkStyles from './styles/link.styles';

const link = {
 root: styleshift.compose(canFocus, styleshift.define(linkStyles.root)),
};

const linkDocs = styleshift.docs(linkStyles);

export { link, linkDocs, linkStyles };
