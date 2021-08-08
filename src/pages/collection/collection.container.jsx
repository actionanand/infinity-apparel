import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from './collection.component';


const GET_COLLECTION_BY_TITLE = gql`
  {
    query getCollectionsByTitle($title: string!) {
      getCollectionsByTitle(title: $title) {
        id
        title
        items {
          id
          name
          price
          imageUrl
        }
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => (
  <Query query={ GET_COLLECTION_BY_TITLE } variables={{ title: match.params.collectionID }}>
    {
      ({ loading, data }) => {
        if (loading) return <Spinner/>
        const { getCollectionsByTitle } = data;
        return <CollectionPage collection={ getCollectionsByTitle } />
      }
    }
  </Query>
);

export default CollectionPageContainer;