import * as React from "react";
import "./App.css";
import Cube from "./features/Cube";
import { CubeAction } from "./types";
import { RubiksCube } from "./types/RubiksCube";

interface IAppState {
    cube: RubiksCube;
    history: Array<{ action: CubeAction; inverted?: boolean }>;
}
class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);
        this.state = { cube: new RubiksCube(), history: [] };
        this.handleTurnClick = this.handleTurnClick.bind(this);
        this.handleUndoClick = this.handleUndoClick.bind(this);
    }

    public handleTurnClick(action: CubeAction, inverted?: boolean) {
        const updated = this.state.cube.turn(action, inverted);
        this.setState({ cube: updated, history: [...this.state.history, { action, inverted }] });
    }

    public handleUndoClick() {
        const history = this.state.history.pop();
        if (!history) {
            return;
        }
        const updated = this.state.cube.turn(history.action, !history.inverted);
        this.setState({ cube: updated, history: this.state.history });
    }

    public render() {
        return (
            <div>
                <Cube cube={this.state.cube} />
                <ul>{this.state.history.map(item => `${item.action}${item.inverted ? "'" : ""}`).join(", ")}</ul>

                <button type="button" onClick={this.handleTurnClick.bind(this, "F", false)}>
                    F
                </button>
                <button type="button" onClick={this.handleTurnClick.bind(this, "F", true)}>
                    F '
                </button>

                <button type="button" onClick={this.handleUndoClick}>
                    UNDO action
                </button>
            </div>
        );
    }
}

export default App;
