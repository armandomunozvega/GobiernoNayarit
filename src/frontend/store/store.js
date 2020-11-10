// Dependencies
import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

// Reducers
import { accountReducer, rootReducer as reducer } from "~/reducers";

let store;

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [],
  blackList: ["account"],
};

const authPersistConfig = {
  key: "account",
  storage: storageSession,
  whiteList: ["account"],
};

const rootReducer = combineReducers({
  account: persistReducer(authPersistConfig, accountReducer),
  root: reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

function makeStore(initialState = {}) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const _store = useMemo(() => initializeStore(initialState), [initialState]);
  return _store;
}
