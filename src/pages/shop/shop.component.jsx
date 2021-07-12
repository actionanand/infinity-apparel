import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
<div className='shop-page'>
    {
      collections.filter((item, index) => index < 4)
      .map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
      ))
    }
  </div>
);
  
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);