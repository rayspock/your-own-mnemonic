import React from "react";
import {connect} from "react-redux";
import {Seed} from "../reducers/types";
import {AppState} from "../reducers";

interface ListProps {
    seeds: Array<Seed>
}

const mapStateToProps = (state: AppState) => {
    const {main} = state;
    return {
        seeds: main.seeds
    };
};

const ConnectedList = ({seeds}: ListProps) => {
    return (
        <ul className="list-group list-group-flush">
            {(seeds && seeds.length > 0) ? (seeds.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.mnemonic}
                </li>
            ))) : (
                <li className="list-group-item">
                    You have no mnemonic here.
                </li>
            )
            }
        </ul>
    );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
