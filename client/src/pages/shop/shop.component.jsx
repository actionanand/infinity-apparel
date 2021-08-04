import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsContainer from '../collection/collections.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


const ShopPage = ({ onFetchCollectionsStart, match }) => {

  useEffect(() => {
    onFetchCollectionsStart()
  }, [onFetchCollectionsStart]);
    
  return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}  
        component={ CollectionsOverviewContainer } />
        <Route path={`${match.path}/:collectionId`}  
        component={ CollectionsContainer }  />
      </div>
    );
}

  
const mapDispatchToProps = dispatch => ({
  onFetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);