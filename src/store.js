import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authorization"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

//const store = createStore(rootReducer, preloadedState, composedEnhancers);
export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);
