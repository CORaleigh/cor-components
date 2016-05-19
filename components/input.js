import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <input id={this.props.id} name={this.props.name} onChange={this.props.onChange} type={this.props.type} className={this.props.formControl} placeholder={this.props.placeholder} />
        );
    }
}
