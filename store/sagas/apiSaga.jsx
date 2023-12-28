import { takeLatest, put, call  ,all, delay} from 'redux-saga/effects';
import axios  , {AxiosResponse}from 'axios'
import {apiCallBegan , apiCallSuccess , apiCallFailed , fakeApiCallSuccess ,fakeApiCallBegan} from "../slices/items"
// import {FETCH_DATA} from "../store/StoreConstants"
// import { receiveDataFailure , receiveDataSuccess } from '../store/Actions';




const getItems = ()=>axios.get("https://run.mocky.io/v3/75d21a11-8939-40df-9475-8c20b0d0996d?mocky-delay=600ms");

function* onFetchData() {
  try {
    // API Request
    // const response = yield call();
    const response = yield call(getItems);
    // console.log("data: " ,Object.keys(response.data))
    yield put(apiCallSuccess(response.data["categories"]));
  } catch(e) {
    // console.log(e.message)
    yield put(apiCallFailed(e.message));
  }
}

function* onFakeDataFetch(){
  yield delay(2000)
  yield put(fakeApiCallSuccess());
}

export default function* fetchDataSaga() {
  yield all([takeLatest(apiCallBegan , onFetchData) , takeLatest(fakeApiCallBegan,onFakeDataFetch)]);
}