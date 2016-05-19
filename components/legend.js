import React from 'react';

export default class Legend extends React.Component {
    render() {
        return (
            <legend>{this.props.title}</legend>
        );
    }
}
