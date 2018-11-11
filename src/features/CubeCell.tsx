import * as React from "react";
import { Color } from "src/types";

interface ICubeCellProps {
    color: Color;
}

class CubeCell extends React.Component<ICubeCellProps> {
    constructor(props: ICubeCellProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return <span className="cube-cell" style={{ backgroundColor: this.props.color }} />;
    }
}

export default CubeCell;
