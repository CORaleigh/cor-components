import React from 'react';

export default class FormGroup extends React.Component {
    render() {
        return (
            <div className="form-group">
                {this.state.fields}
            </div>
        );
    }
}
