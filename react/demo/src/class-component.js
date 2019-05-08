import React, { Component } from 'react';

export class ClassComponent extends Component {
    render () {
        const { greeting, name } = this.props;
        return (
            <h1>This is a class component. {greeting} {name}.</h1>
        );
    }
}