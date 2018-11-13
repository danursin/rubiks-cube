import * as React from "react";

interface ISceneProps {
    perspective: number;
}

class Scene extends React.Component<ISceneProps> {
    constructor(props: ISceneProps) {
        super(props);
    }

    public render() {
        return (
            <div className="cube-scene" style={{ perspective: `${this.props.perspective}px` }}>
                {this.props.children}
            </div>
        );
    }
}

export default Scene;
