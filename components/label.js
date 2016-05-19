import React from 'react';

export default class Label extends React.Component {
    render() {
        return (
            <label for={this.props.labelFor}>{this.props.labelHTML}</label>
        );
    }
}
