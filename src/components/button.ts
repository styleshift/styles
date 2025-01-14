import styleshift from '../styleshift';
import { canFocus } from './focus';
import { canDisable } from './disable';
import buttonStyles from './styles/button.styles';

const button = {
 root: styleshift.compose(
  canFocus,
  canDisable,
  styleshift.define(buttonStyles.root),
 ),
};

const buttonDocs = styleshift.docs(buttonStyles);

export { button, buttonDocs, buttonStyles };
