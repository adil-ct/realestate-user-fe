import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/auth";
import user from "./user/user";
import modal from "./modal/modal";
import accounts from "./accounts";
import marketplace from "./marketplace";
import notifications from "./notifications";
import tour from "./tour/tour";
import pManager from "./pManager";
import common from "./common";

const persistConfig = {
  key: "root",
  storage,
  // List of all reducers we don't want to persist
  blacklist: ["auth", "user", "property", "accounts", "marketplace"],
  // List of all reducers we want to persist
  whitelist: [],
};

// Persist Only User -> User profile reducer
// const userProfilePersistConfig = {
//   key: "user",
//   storage,
//   whitelist: ["userProfile"],
// };

const allReducers = combineReducers({
  auth,
  user,
  modal,
  accounts,
  marketplace,
  notifications,
  tour,
  pManager,
  common
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return persistedReducer(state, action);
};

export default rootReducer;
