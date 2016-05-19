import React from 'react';

export default class TextBlurb extends React.Component {
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}
