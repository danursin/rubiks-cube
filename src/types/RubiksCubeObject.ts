import { CubeObject } from "./CubeObject";

export class RubiksCubeObject {
    public readonly cubeUnitLength: number;
    public cubes: CubeObject[];

    constructor(cubeUnitLength: number) {
        this.cubeUnitLength = cubeUnitLength;

        const n = this.cubeUnitLength;
        this.cubes = [
            new CubeObject({ translate: [2 * n, 0, 0], rotate: [0, 0, 0] }),
            new CubeObject({ translate: [4 * n, 0, 0], rotate: [0, 0, 0] }),
            new CubeObject({ translate: [6 * n, 0, 0], rotate: [0, 0, 0] })
        ];
    }
}
