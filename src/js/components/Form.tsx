import React, {Component} from "react";
import {connect} from "react-redux";
import {genMnemonic} from "../actions";
import {Seed} from "../reducers/types";
import {Dispatch} from "redux";
import Dropdown from "./Picker/Dropdown";
import DynamicText from "./Form/DynamicText";
import {ArrayUtil} from "../utils";
// @ts-ignore
import bip39 from "bip39";


interface ConnectedFormProps {
    genMnemonic: Function;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        genMnemonic: (seed: Seed) => dispatch(genMnemonic(seed))
    };
}

class ConnectedForm extends Component<ConnectedFormProps, any> {
    private myRefs: Array<any>;
    private strength_list: object;

    constructor(props: ConnectedFormProps) {
        super(props);
        this.strength_list = {
            11: "11",
            14: "14",
            17: "17",
            23: "23"
        };
        const default_strength = 11;
        this.state = {
            mnemonic: ArrayUtil.repeatElement(default_strength, ""),
            strength: default_strength
        };
        this.handleStrengthChange = this.handleStrengthChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMnemonicChange = this.handleMnemonicChange.bind(this);
        this.handleMnemonicInputChange = this.handleMnemonicInputChange.bind(this);
        this.myRefs = ArrayUtil.repeatElement(default_strength, "");

    }

    handleStrengthChange(event: any) {
        const {value} = event.target;
        this.clear();
        this.setState({
            mnemonic: ArrayUtil.repeatElement(value, ""),
            strength: value
        });
    }

    handleMnemonicChange(id: number, value: string) {
        let new_mnemonic = [...this.state.mnemonic];
        new_mnemonic[id] = value;
        this.setState({
            mnemonic: new_mnemonic
        });
    }

    handleMnemonicInputChange(id: number, value: string) {
        this.handleMnemonicChange(id, value);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const {mnemonic, strength} = this.state;
        this.props.genMnemonic({mnemonic, id: ""});
        this.clear();
        this.setState({mnemonic: ArrayUtil.repeatElement(strength, "")});
    }

    clear() {
        this.myRefs.forEach((item) => {
            if (item && typeof item.clear === 'function') {
                item.clear();
            }
        });
    }

    render() {
        const {mnemonic, strength} = this.state;
        const options = bip39.wordlists.english;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="strength">Strength</label>
                    <Dropdown id="strength" src={this.strength_list} title="Choose Strength"
                              marginClass="mt-1"
                              selectedValue={strength}
                              onChange={this.handleStrengthChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mnemonic">BIP39 Mnemonic</label>
                    <DynamicText id="mnemonic" value={mnemonic} options={options} myRefs={this.myRefs}
                                 onInputChange={this.handleMnemonicInputChange} onChange={this.handleMnemonicChange}/>
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SEND
                </button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
