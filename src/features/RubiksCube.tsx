import * as React from "react";
import { Color, FaceDirection } from "src/types";
import { RubiksCubeObject } from "src/types/RubiksCubeObject";
import Cube from "./Cube";

interface IRubiksCubeProps {
    cube: RubiksCubeObject;
}

class RubiksCube extends React.Component<IRubiksCubeProps> {
    private readonly colors: { [key in FaceDirection]?: Color } = {
        back: "blue",
        bottom: "yellow",
        front: "green",
        left: "orange",
        right: "red",
        top: "white"
    };

    constructor(props: IRubiksCubeProps) {
        super(props);
    }

    public render() {
        return this.props.cube.cubes.map((cube, index) => {
            return (
                <Cube
                    key={index}
                    translate={cube.translate}
                    rotate={cube.rotate}
                    colors={this.colors}
                    width={this.props.cube.cubeUnitLength || 100}
                />
            );
        });
    }
}

export default RubiksCube;
