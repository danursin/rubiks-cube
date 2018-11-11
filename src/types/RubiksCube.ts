import { CubeFace } from "./CubeFace";
import { Color, CubeAction, IPerspective } from "./index";

export class RubiksCube {
    public readonly faces: { [key in Color]: CubeFace };
    public readonly perspective: IPerspective;

    constructor() {
        this.faces = {
            blue: new CubeFace("blue"),
            green: new CubeFace("green"),
            orange: new CubeFace("orange"),
            red: new CubeFace("red"),
            white: new CubeFace("white"),
            yellow: new CubeFace("yellow")
        };

        this.perspective = { front: "green", right: "red", up: "white" };
    }

    public clone(): RubiksCube {
        const clone = new RubiksCube();
        Object.keys(clone.faces).forEach((key: Color) => {
            for (let i = 0; i < 9; i++) {
                clone.faces[key].cells[i] = this.faces[key].cells[i];
            }
        });
        return clone;
    }

    public turn(action: CubeAction, inverted?: boolean): RubiksCube {
        const clone = this.clone();

        const greenClone = clone.faces.green.cells;
        const whiteClone = clone.faces.white.cells;
        const redClone = clone.faces.red.cells;
        // const blueClone = clone.faces.blue.cells;
        const orangeClone = clone.faces.orange.cells;
        const yellowClone = clone.faces.yellow.cells;

        const greenThis = this.faces.green.cells;
        const whiteThis = this.faces.white.cells;
        const redThis = this.faces.red.cells;
        // const blueThis = this.faces.blue.cells;
        const orangeThis = this.faces.orange.cells;
        const yellowThis = this.faces.yellow.cells;

        switch (action) {
            case "F":
                if (inverted) {
                    greenClone[6] = greenThis[0];
                    greenClone[0] = greenThis[2];
                    greenClone[2] = greenThis[8];
                    greenClone[8] = greenThis[6];

                    orangeClone[8] = whiteThis[2];
                    orangeClone[5] = whiteThis[1];
                    orangeClone[2] = whiteThis[0];

                    yellowClone[6] = orangeThis[8];
                    yellowClone[7] = orangeThis[5];
                    yellowClone[8] = orangeThis[2];

                    redClone[0] = yellowThis[6];
                    redClone[3] = yellowThis[7];
                    redClone[6] = yellowThis[8];

                    whiteClone[0] = redThis[0];
                    whiteClone[1] = redThis[3];
                    whiteClone[2] = redThis[6];
                } else {
                    greenClone[0] = greenThis[6];
                    greenClone[2] = greenThis[0];
                    greenClone[8] = greenThis[2];
                    greenClone[6] = greenThis[8];

                    whiteClone[2] = orangeThis[8];
                    whiteClone[1] = orangeThis[5];
                    whiteClone[0] = orangeThis[2];

                    orangeClone[8] = yellowThis[6];
                    orangeClone[5] = yellowThis[7];
                    orangeClone[2] = yellowThis[8];

                    yellowClone[6] = redThis[0];
                    yellowClone[7] = redThis[3];
                    yellowClone[8] = redThis[6];

                    redClone[0] = whiteThis[0];
                    redClone[3] = whiteThis[1];
                    redClone[6] = whiteThis[2];
                }

                break;
            case "B":
                break;
            case "U":
                break;
            case "D":
                break;
            case "L":
                break;
            case "R":
                break;
            default:
                throw new Error(`invalid action ${action}`);
        }

        return clone;
    }
}
