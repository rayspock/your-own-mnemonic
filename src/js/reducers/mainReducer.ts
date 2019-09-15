import {MainState} from "./types";
import {MnemonicActionTypes} from "../actions/types";
import {ADD_MNEMONIC, DISMISS_TELEGRAM, FOUND_ERROR} from "../constants/action-types";

const initialState = {
    seeds: []
};

export function mainReducer(state: MainState = initialState, action: MnemonicActionTypes): MainState {
    if (action.type === FOUND_ERROR) {
        return Object.assign({}, state, {
            telegram: {...action.payload}
        });
    }
    if (action.type === DISMISS_TELEGRAM) {
        return Object.assign({}, state, {
            telegram: Object.assign({}, state.telegram, {show: false})
        });
    }
    if (action.type === ADD_MNEMONIC) {
        return Object.assign({}, state, {
            seeds: [...state.seeds, action.payload]
        });
    }
    return state;
};
