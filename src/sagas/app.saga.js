import { put, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { INITIALIZE_APP } from '../actionTypes/app.actiontypes';
import { select } from 'redux-saga/effects'
import { setToken } from '../utils/token';
import { getUserToken } from '../selectors/index';

function* initializeApp() {
  console.log('initializeApp saga')
  token = yield select(getUserToken);
  setToken(token)
}

export function* watchAppInitial() {
  yield takeEvery(INITIALIZE_APP, initializeApp);
}
