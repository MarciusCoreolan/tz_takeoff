import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userAuthReducer } from "./userAuthReducer";
import { userContactsReducer } from "./userContactsReducer";
import {popupReducer} from "./popupReducer";

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  userContacts: userContactsReducer,
  popup: popupReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
