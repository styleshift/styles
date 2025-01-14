import styleshift from '../styleshift';
import cardStyles from './card.styles';

const card = {
 root: styleshift.define(cardStyles.root as any),
 head: styleshift.define(cardStyles.head as any),
 body: styleshift.define(cardStyles.body as any),
 foot: styleshift.define(cardStyles.foot as any),
};

const cardDocs = styleshift.docs(cardStyles);

export { card, cardDocs, cardStyles };
