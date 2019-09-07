import {MainState} from "./types";
import {MnemonicActionTypes} from "../actions/types";
import {ADD_MNEMONIC} from "../constants/action-types";

const initialState = {
    seeds: [],
};

export function mainReducer(state: MainState = initialState, action: MnemonicActionTypes) : MainState {
    if (action.type === ADD_MNEMONIC) {
        return Object.assign({}, state, {
            seeds: [...state.seeds, action.payload]
        });
    }
    return state;
};
