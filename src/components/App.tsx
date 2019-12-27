import "../css/App.css";

import React from "react";

import { MuiThemeProvider } from "@material-ui/core";

import theme from "../theme/muiTheme";
import Title from "./Title";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <Title />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
