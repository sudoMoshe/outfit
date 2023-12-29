import { combineReducers } from 'redux'
import { configureStore, applyMiddleware, Tuple, Store } from '@reduxjs/toolkit';
import createSagaMiddleware   from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'

//slices
import itemsReducer from './slices/items'
import currentOutfitReducer from "./slices/currentOutfit"
import outfitsReducer from "./slices/outfits"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()



const rootReducer = combineReducers({
  items: itemsReducer,
  outfits: outfitsReducer,
  currentOutfit: currentOutfitReducer
});

const store = configureStore({
  reducer: rootReducer,
 //@ts-ignore => could'nt find a better solution on stack overflow probably a bug
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware),

}


)

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;