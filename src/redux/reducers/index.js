import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import constants from "../constants";
import authReducer from "./authReducer";
import midReducer from "./midReducer";


const persistConfig = {
    key: constants.asyncStorageKey,
    storage: storage,
    blacklist: ['mid']
};


const appReducer = persistCombineReducers(persistConfig, {
    auth: authReducer,
    mid: midReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
