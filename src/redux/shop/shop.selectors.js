import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// converting obj into array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

//curried function
export const selectCollection = memoize((collectionUrlParam) => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
  )
);