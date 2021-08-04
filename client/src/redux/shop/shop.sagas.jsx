import { takeEvery, call, put, all } from 'redux-saga/effects';

import { firestore, convertSnapshotCollectionsToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import shopActionsTypes from './shop.types';


export function* fetchCollectionsAsync() {
    try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionsMap = yield call(convertSnapshotCollectionsToMap, snapshot);
      yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
    }
}


export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}