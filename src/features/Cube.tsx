import * as React from "react";
import { Color, FaceDirection, Vector } from "../types";
import "./Cube.css";

interface ICubeProps {
    rotate: Vector;
    translate: Vector;
    colors?: { [key in FaceDirection]?: Color };
    width: number;
}

class Cube extends React.Component<ICubeProps> {
    constructor(props: ICubeProps) {
        super(props);
    }

    public render() {
        const width = this.props.width;

        const transform = `translateX(${this.props.translate[0]}px) translateY(${this.props.translate[1]}px) translateZ(${
            this.props.translate[2]
        }px) rotateX(${this.props.rotate[0]}deg) rotateY(${this.props.rotate[1]}deg) rotateZ(${this.props.rotate[2]}deg)`;
        const cubeStyles: React.CSSProperties = {
            height: width,
            transform,
            width
        };

        const colors: { [key in FaceDirection]: Color | "black" } = this.props.colors
            ? {
                  back: this.props.colors.back || "black",
                  bottom: this.props.colors.bottom || "black",
                  front: this.props.colors.front || "black",
                  left: this.props.colors.left || "black",
                  right: this.props.colors.right || "black",
                  top: this.props.colors.top || "black"
              }
            : {
                  back: "black",
                  bottom: "black",
                  front: "black",
                  left: "black",
                  right: "black",
                  top: "black"
              };

        return (
            <div className="cube" style={cubeStyles}>
                <div
                    className="cube-face cube-face-front"
                    style={{
                        backgroundColor: colors.front,
                        transform: `rotateY(0deg) translateZ(${width}px)`
                    }}
                />
                <div
                    className="cube-face cube-face-back"
                    style={{
                        backgroundColor: colors.back,
                        transform: `rotateY(180deg) translateZ(${width}px)`
                    }}
                />
                <div
                    className="cube-face cube-face-right"
                    style={{
                        backgroundColor: colors.right,
                        transform: `rotateY(90deg) translateZ(${width}px)`
                    }}
                />
                <div
                    className="cube-face cube-face-left"
                    style={{
                        backgroundColor: colors.left,
                        transform: `rotateY(-90deg) translateZ(${width}px)`
                    }}
                />
                <div
                    className="cube-face cube-face-top"
                    style={{
                        backgroundColor: colors.top,
                        transform: `rotateX(90deg) translateZ(${width}px)`
                    }}
                />
                <div
                    className="cube-face cube-face-bottom"
                    style={{
                        backgroundColor: colors.bottom,
                        transform: `rotateX(-90deg) translateZ(${width}px)`
                    }}
                />
            </div>
        );
    }
}

export default Cube;
