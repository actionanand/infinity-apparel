import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsContainer from '../collection/collections.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {

  componentDidMount() {
    const { onFetchCollectionsStart } = this.props;
    onFetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    
    return (
        <div className='shop-page'>
          <Route exact path={`${match.path}`}  
          component={ CollectionsOverviewContainer } />
          <Route path={`${match.path}/:collectionId`}  
          component={ CollectionsContainer }  />
        </div>
      );
  }
}

  
const mapDispatchToProps = dispatch => ({
  onFetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);