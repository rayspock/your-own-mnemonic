import {ADD_MNEMONIC, DISMISS_TELEGRAM, FOUND_ERROR, GEN_MNEMONIC} from "../constants/action-types";
import {MnemonicActionTypes} from "./types";
import {Seed, Telegram} from "../reducers/types";

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

export function foundError(payload: Telegram): MnemonicActionTypes{
    return {
        type: FOUND_ERROR,
        payload
    }
};

export function dismissTelegram(): MnemonicActionTypes {
    return {
        type: DISMISS_TELEGRAM
    }
};
