import {ADD_MNEMONIC, GEN_MNEMONIC} from "../constants/action-types";
import {MnemonicActionTypes} from "./types";
import {Seed} from "../reducers/types";

export function genMnemonic(payload: Seed): MnemonicActionTypes {
    return {
        type: GEN_MNEMONIC,
        payload
    }
};

export function addMnemonic(payload: Seed): MnemonicActionTypes {
    return {
        type: ADD_MNEMONIC,
        payload
    }
};

