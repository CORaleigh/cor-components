import Input from './input';
import FormGroup from './form-group';
import React from 'react';

export default class CheckboxFormGroup extends FormGroup {
    constructor(props) {
        super(props);

        this.state = {
            fields: [
                <div key="topDiv" className="checkbox" style={{textAlign: 'left'}}>
                    <label>
                        <Input type="checkbox" formControl="" />
                        {this.props.labelHTML}
                    </label>
                </div>
            ]
        };
    }
}
