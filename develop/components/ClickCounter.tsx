/// <reference path='../../typings/tsd.d.ts' />

import * as React from 'react';
import { ClickStore } from '../stores/ClickStore';
import { ViewActions } from '../actions/ViewActions';

interface ClickCounterProps { }
interface ClickCounterState {
    clicks: number;
}

export class ClickCounter extends React.Component<ClickCounterProps, ClickCounterState> {

    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
    }

    componentDidMount = () => {
        ClickStore.addChangeListener(this.onChange);
    }

    componentWillUnmount = () => {
        ClickStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState({ clicks: ClickStore.getClicks() });
    }

    handleClick = () => {
        ViewActions.click();
    }

    render = () => {
        return <div onClick={this.handleClick}>
              <span>{this.state.clicks}</span>
            </div>;
    }

}
