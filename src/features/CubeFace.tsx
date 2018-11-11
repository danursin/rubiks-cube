import * as React from "react";
import { Color } from "src/types";
import CubeCell from "./CubeCell";

interface ICubeFaceProps {
    cells: [Color, Color, Color, Color, Color, Color, Color, Color, Color];
}

class CubeFace extends React.Component<ICubeFaceProps> {
    constructor(props: ICubeFaceProps) {
        super(props);
    }

    public render() {
        const cells = this.props.cells;
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <CubeCell color={cells[0]} />
                        </td>
                        <td>
                            <CubeCell color={cells[1]} />
                        </td>
                        <td>
                            <CubeCell color={cells[2]} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CubeCell color={cells[3]} />
                        </td>
                        <td>
                            <CubeCell color={cells[4]} />
                        </td>
                        <td>
                            <CubeCell color={cells[5]} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CubeCell color={cells[6]} />
                        </td>
                        <td>
                            <CubeCell color={cells[7]} />
                        </td>
                        <td>
                            <CubeCell color={cells[8]} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CubeFace;
