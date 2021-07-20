import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertSnapshotCollectionsToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { onUpdateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // // Observable : it'll fetch whenever there is a data change
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   // console.log(snapshot);
    //   const collectionMap = convertSnapshotCollectionsToMap(snapshot);
    //   onUpdateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });

    // Promise : It'll run one time only (during component mounting)
    collectionRef.get().then(snapshot => {
      // console.log(snapshot);
      const collectionMap = convertSnapshotCollectionsToMap(snapshot);
      onUpdateCollections(collectionMap);
      this.setState({ loading: false });
    });

  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
        <div className='shop-page'>
          <Route exact path={`${match.path}`} 
            render={ (props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
          <Route path={`${match.path}/:collectionId`} 
            render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
        </div>
      );
  }
}
  
const mapDispatchToProps = dispatch => ({
  onUpdateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);