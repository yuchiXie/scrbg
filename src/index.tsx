import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

