import styleshift from '../styleshift';
import alertStyles from './styles/alert.styles';
const alertDocs = styleshift.docs(alertStyles);

const alert = {
 root: styleshift.define(alertStyles.root),
 title: styleshift.define(alertStyles.title),
 description: styleshift.define(alertStyles.description),
};

export { alert, alertDocs, alertStyles };
