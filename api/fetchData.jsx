
import { takeLatest, put, call } from 'redux-saga/effects';
import {FETCH_DATA} from "../store/StoreConstants"
import { receiveDataFailure , receiveDataSuccess } from '../store/Actions';
import axios from 'axios'

function* onFetchData() {
  try {
    // API Request
    // const response = yield call();
    const response = yield call(axios.get, ['https://api.thecatapi.com/v1/images/search']);
    yield put(receiveDataSuccess(response.data[0]));
  } catch(e) {
    yield put(receiveDataFailure(e));
  }
}

export function* fetchDataSaga() {
  yield takeLatest(FETCH_DATA, onFetchData);
}