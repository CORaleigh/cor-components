import Label from './label';
import Input from './input';
import FormGroup from './form-group';
import React from 'react';

export default class InputFormGroup extends FormGroup {
    constructor(props) {
        super(props);

        this.state = {
            fields: [
                (<Label key="label" labelHTML={props.labelHTML} />),
                (<Input key="input" formControl="form-control" name={props.name} onChange={props.onChange} type={this.props.type} placeholder={this.props.placeholder} />)
            ]
        };
    }
}