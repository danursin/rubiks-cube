import * as React from "react";
import { RubiksCube } from "src/types/RubiksCube";
import CubeFace from "./CubeFace";

interface ICubeProps {
    cube?: RubiksCube;
}
class Cube extends React.Component<ICubeProps> {
    constructor(props: ICubeProps) {
        super(props);
    }

    public render() {
        if (!this.props.cube) {
            return <p>No cube available</p>;
        }
        return (
            <table>
                <tbody>
                    <tr>
                        <td />
                        <td />
                        <td>
                            <CubeFace cells={this.props.cube.faces.orange.cells} />
                        </td>
                        <td />
                    </tr>
                    <tr>
                        <td>
                            <CubeFace cells={this.props.cube.faces.green.cells} />
                        </td>
                        <td>
                            <CubeFace cells={this.props.cube.faces.yellow.cells} />
                        </td>
                        <td>
                            <CubeFace cells={this.props.cube.faces.blue.cells} />
                        </td>
                        <td>
                            <CubeFace cells={this.props.cube.faces.white.cells} />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td />
                        <td>
                            <CubeFace cells={this.props.cube.faces.red.cells} />
                        </td>
                        <td />
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Cube;
