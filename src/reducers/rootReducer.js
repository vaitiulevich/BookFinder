import { combineReducers } from 'redux';

import volumeListReducer from './volumes';

const rootReducer = combineReducers({ volumeList: volumeListReducer });

export default rootReducer;
