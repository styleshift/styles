import styleshift from '../../styleshift';
import buttonStyles from './button.styles';
import { canFocus } from '../focus';
import { canDisable } from '../disable';

const button = {
 root: styleshift.compose(
  canFocus,
  canDisable,
  styleshift.define(buttonStyles.root),
 ),
};

const buttonDocs = styleshift.docs(buttonStyles);

export { button, buttonDocs, buttonStyles };
