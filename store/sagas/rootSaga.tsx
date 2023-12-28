import {all , fork} from "redux-saga/effects";
import apiSaga
 from "./apiSaga";
export function* rootSaga(){
    yield all([fork(apiSaga)])
}