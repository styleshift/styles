import styleshift from '../../styleshift';
import alertStyles from '../../alert.styles';

const alert = {
 root: styleshift.define(alertStyles.root),
 title: styleshift.define(alertStyles.title),
 description: styleshift.define(alertStyles.description),
};

const alertDocs = styleshift.docs(alertStyles);

export { alert, alertDocs, alertStyles };
