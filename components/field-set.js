import Legend from './legend';
import TextBlurb from './text-blurb';
import React from 'react';

export default class FieldSet extends React.Component {
    render() {
        return (
            <fieldset className={this.props.className}>
                <Legend title={this.props.title}/>
                <TextBlurb text={this.props.blurb}/>
                {this.props.fields}
            </fieldset>
        );
    }
}