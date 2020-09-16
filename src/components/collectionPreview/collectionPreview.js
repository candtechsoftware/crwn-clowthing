import React from 'react';
import CollectionItem from '../collectionItem/collectionItem';

import './collectionPreview.scss';

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
        {items.filter((_, index) => index < 4).map(({id, ...itemProps}) => {
          return <CollectionItem key={id} {...itemProps} />
        })}
    </div>
  </div>
);

export default CollectionPreview;