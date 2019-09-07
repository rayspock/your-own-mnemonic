import React from "react";
import {Typeahead} from 'react-bootstrap-typeahead';

interface DynamicTextProps {
    id: string,
    value: Array<string>,
    options: Array<string>,
    marginClass?: string,
    onChange: Function,
    onInputChange: Function,
    myRefs: Array<any>
}

export default class DynamicText extends React.Component<DynamicTextProps> {

    onChange(id: number, value: string, props: any) {
        const {onChange} = props;
        onChange(id, value);
    }

    onInputChange(id: number, value: string, props: any) {
        const {onInputChange} = props;
        onInputChange(id, value);
    }

    renderReptileText(value: Array<string>, id: string, options: Array<string>, myRefs: Array<any>) {
        return value.map((item: string, index: number) => {
                const uid = id + index;
                let arr_dom = [];
                const hidden = (index < value.length - 1) ? false : true;
                arr_dom.push(<div key={uid} className="input-group col-4 -col-sm-3 col-md-3 col-lg-3 mb-1">
                    <Typeahead
                        ref={(ref) => myRefs[index] = ref }
                        id={index.toString()}
                        options={options}
                        maxResults={10}
                        onInputChange={(value) => {
                            this.onInputChange(index, value, this.props);
                        }}
                        onChange={(selected) => {
                            this.onChange(index, selected[0], this.props)
                        }}
                    />
                    <div className="input-group-append ml-3">
                        {(!hidden) ? ">" : <span>&nbsp;&nbsp;</span>}
                    </div>
                </div>);
                return arr_dom;
            }
        )
    }

    render() {
        const {id, value, marginClass, options, myRefs} = this.props;
        const className = "form-group row" + ((marginClass) ? marginClass : "");
        return (
            <div key={id} id={id} className={className}>
                {this.renderReptileText(value, id, options, myRefs)}
            </div>
        )
    }
}
