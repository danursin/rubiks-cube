import * as React from "react";
import "./App.css";
import RubiksCube from "./features/RubiksCube";
import Scene from "./features/Scene";
import { Color, FaceDirection, Vector } from "./types";
import { RubiksCubeObject } from "./types/RubiksCubeObject";

interface IAppState {
    cubeUnitLength: number;
    rotate: Vector;
    translate: Vector;
    colors?: { [key in FaceDirection]?: Color };
    perspective: number;
}
class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        const n = 50;
        this.state = {
            colors: { back: "blue", bottom: "yellow", front: "green", left: "orange", right: "red", top: "white" },
            cubeUnitLength: n,
            perspective: 100000,
            rotate: [0, 0, 0],
            translate: [-3 * n, -3 * n, 0]
        };
        this.handleRotateChange = this.handleRotateChange.bind(this);
        this.handleTranslateChange = this.handleTranslateChange.bind(this);
        this.handlePerspectiveChange = this.handlePerspectiveChange.bind(this);
    }

    public handleRotateChange(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const split = name.split("-");
        const value = +event.target.value;
        const dimension = split[1] as keyof Vector;
        this.setState({
            rotate: {
                ...this.state.rotate,
                [dimension]: value
            }
        });
    }

    public handleTranslateChange(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const split = name.split("-");
        const value = +event.target.value;
        const dimension = split[1] as keyof Vector;
        this.setState({
            translate: {
                ...this.state.translate,
                [dimension]: value
            }
        });
    }

    public handlePerspectiveChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = +event.target.value;
        this.setState({
            perspective: value
        });
    }

    public render() {
        return (
            <div>
                <Scene perspective={this.state.perspective}>
                    <RubiksCube cube={new RubiksCubeObject(this.state.cubeUnitLength)} />
                    {/* <Cube rotate={this.state.rotate} translate={this.state.translate} colors={this.state.colors} /> */}
                </Scene>
            </div>
        );
    }
}

export default App;
