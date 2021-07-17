import shopActionsTypes from "./shop.types";

export const updateCollections = (collectionMap) => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
});