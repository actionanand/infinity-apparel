import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsContainer from '../collection/collections.container';


class ShopPage extends React.Component {

  componentDidMount() {
    const { onFetchCollectionsStartAsync } = this.props;
    onFetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    
    return (
        <div className='shop-page'>
          <Route exact path={`${match.path}`} 
            // render={ (props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } 
          component={ CollectionsOverviewContainer } />
          <Route path={`${match.path}/:collectionId`} 
            // render={ (props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> } 
          component={ CollectionsContainer }  />
        </div>
      );
  }
}

  
const mapDispatchToProps = dispatch => ({
  onFetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(null, mapDispatchToProps)(ShopPage);