import React from "react";

interface DropdownProps {
    id: string,
    src: any,
    ref?: any,
    selectedValue: string,
    title: string,
    marginClass?: string,
    onChange: Function
}

export default class Dropdown extends React.Component<DropdownProps> {

    onChange(e: any) {
        const {onChange} = this.props;
        onChange(e);
    }

    render() {
        const {id, src, ref, selectedValue, title, marginClass} = this.props;
        const className = "form-control " + marginClass;
        return (
            <select id={id} className={className} ref={ref} onChange={this.onChange.bind(this)}
                    value={selectedValue}>
                <option value="" disabled>{title}</option>
                {Object.keys(src).map((key, idx) => {
                        const item = src[key];
                        return (
                            <option key={key} value={key}>{item}</option>
                        )
                    }
                )}
            </select>
        );
    }
}
