import Input from './input';
import FormGroup from './form-group';
import React from 'react';

export default class RadioFormGroup extends FormGroup {
    constructor(props) {
        super(props);
        let fields = props.choices.map(function(choice, index) {
            return (
                <div key={props.name + index} className="radio">
                    <label>
                        <Input type="radio" id={props.name + index} name={props.name} value={choice.value}/>
                        {choice.label}
                    </label>
                </div>
            );
        });
        this.state = {
            fields: fields
        };
    }
}
