import { Color } from "./index";

export class CubeFace {
    public readonly color: Color;

    public readonly cells: [Color, Color, Color, Color, Color, Color, Color, Color, Color];

    constructor(color: Color) {
        this.color = color;
        this.cells = [color, color, color, color, color, color, color, color, color];
    }
}
