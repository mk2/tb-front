import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'
import rootReducer from "../reducers/index";

export default function configureStore({rehydrateCallback}) {
  rehydrateCallback = rehydrateCallback ? rehydrateCallback : () => {console.log('rehydrated!')};
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    autoRehydrate()
  );
  persistStore(store, {}, rehydrateCallback);

  return store;
}
