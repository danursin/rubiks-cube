import { Color, FaceDirection, Vector } from "./index";

export class CubeObject {
    public readonly rotate: Vector;
    public readonly translate: Vector;
    public readonly colors: { [key in FaceDirection]?: Color };

    constructor(options?: { rotate?: Vector; translate?: Vector; colors?: { [key in FaceDirection]?: Color } }) {
        options = options || {};
        this.rotate = options.rotate || [0, 0, 0];
        this.translate = options.translate || [0, 0, 0];
        this.colors = Object.assign({}, options.colors, {
            back: "blue",
            bottom: "yellow",
            front: "green",
            left: "orange",
            right: "red",
            top: "white"
        });
    }
}
