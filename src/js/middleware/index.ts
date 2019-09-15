import {MnemonicActionTypes} from "../actions/types";
import {Dispatch} from "redux";
import {GEN_MNEMONIC} from "../constants/action-types";
import {StringUtil} from "../utils/stringUtil";
import {addMnemonic, foundError} from "../actions";
import uuidv1 from "uuid";
// @ts-ignore
import bip39 from "bip39";

interface MiddlewareProps {
    dispatch: Dispatch
}

export function MainMiddleware({dispatch}: MiddlewareProps) {
    return function (next: Function) {
        return function (action: MnemonicActionTypes) {
            if (action.type === GEN_MNEMONIC) {
                const strMnemonic = action.payload.mnemonic.join(" ");
                let newMnemonic;
                try {
                    newMnemonic = bip39.genCustomMnemonic(strMnemonic);
                } catch (e) {
                    return dispatch(foundError({variant: "danger", message: e.message, show: true}));
                }

                if (!StringUtil.isNullOrEmpty(newMnemonic)) {
                    const id = uuidv1();
                    return dispatch(addMnemonic({
                        id: id,
                        mnemonic: newMnemonic
                    }));
                }
            }
            return next(action);
        }
    }
}
