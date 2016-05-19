import Option from './option';
import React from 'react';

export default class Select extends React.Component {
    render() {
        let options = this.props.data.map(function(option) {
            return (<Option key={option.get('id')} value={option.get('title')} />);
        });
        return (
            <select onChange={this.props.onChange} defaultValue="" className="form-control">
                <Option value="" />
                {options}
            </select>
        );
    }
}
