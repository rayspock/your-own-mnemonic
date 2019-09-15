import {ADD_MNEMONIC, DISMISS_TELEGRAM, FOUND_ERROR, GEN_MNEMONIC} from "../constants/action-types";
import {Telegram, Seed} from "../reducers/types";

interface GenMnemonicAction {
    type: typeof GEN_MNEMONIC
    payload: Seed
}

interface AddMnemonicAction {
    type: typeof ADD_MNEMONIC
    payload: Seed
}

interface FoundErrorAction {
    type: typeof FOUND_ERROR
    payload: Telegram
}

interface DismissTelegramAction {
    type: typeof DISMISS_TELEGRAM
}

export type MnemonicActionTypes = GenMnemonicAction | AddMnemonicAction | FoundErrorAction | DismissTelegramAction
