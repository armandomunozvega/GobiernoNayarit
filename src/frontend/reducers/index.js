// Dependencies
import { combineReducers } from "redux";

import account from "./account";
import modal from "./modal";
import home from "./home";

const accountReducer = combineReducers({
  account,
});

const rootReducer = combineReducers({
  modal,
  home,
});

export { accountReducer, rootReducer };
