export type Color = "blue" | "green" | "orange" | "red" | "white" | "yellow";
export interface IPerspective {
    front: Color;
    up: Color;
    right: Color;
}
export type CubeAction = "F" | "B" | "U" | "D" | "L" | "R";
