import Label from './label';
import Select from './select';
import FormGroup from './form-group';
import React from 'react';

export default class SelectFormGroup extends FormGroup {
    constructor(props) {
        super(props);

        this.state = {
            fields: [
                (<Label key="label" labelHTML={props.labelHTML}/>),
                (<Select key="input" onChange={props.onChange} data={this.props.data}/>)
            ]
        };
    }
}
