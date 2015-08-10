/// <reference path='../typings/tsd.d.ts' />
import * as React from "react";
import { ClickCounter } from "./components/ClickCounter";

interface AppProps {  }
interface AppState {  }

class App extends React.Component<AppProps, AppState> {
    render() {
        return <ClickCounter />;
    }
}

React.render(<App/>, document.getElementById('counter'));
