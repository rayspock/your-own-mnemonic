import {combineReducers} from 'redux';
import {MainState} from "./types";
import {mainReducer} from "./mainReducer";

export interface AppState {
    main: MainState
}

const rootReducer = combineReducers<AppState>({
    main: mainReducer
});

export default rootReducer;
