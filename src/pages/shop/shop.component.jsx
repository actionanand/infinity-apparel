import React from 'react';

import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state ={
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;

    return (<div className='shop-page'>
      {
        collections.filter((item, index) => index < 4)
        .map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))
      }
    </div>);
  };

}

export default ShopPage;