import {ADD_MNEMONIC, GEN_MNEMONIC} from "../constants/action-types";
import {Seed} from "../reducers/types";

interface GenMnemonicAction {
    type: typeof GEN_MNEMONIC
    payload: Seed
}

interface AddMnemonicAction {
    type: typeof ADD_MNEMONIC
    payload: Seed
}

export type MnemonicActionTypes = GenMnemonicAction | AddMnemonicAction
