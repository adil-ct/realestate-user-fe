import { NODE_ENV } from "constants/env";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAuthentication, watchAccountBasedSagas, watchNotificationBasedSagas, watchPropertyManagerBasedSagas, watchCommon } from "store/sagas";

import rootReducer from "./store/reducer";

const composeEnhancers =
  (NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuthentication);
sagaMiddleware.run(watchAccountBasedSagas);
sagaMiddleware.run(watchNotificationBasedSagas);
sagaMiddleware.run(watchPropertyManagerBasedSagas);
sagaMiddleware.run(watchCommon);

export default store;
