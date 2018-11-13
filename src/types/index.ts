export type Color = "blue" | "green" | "orange" | "red" | "white" | "yellow";
export interface IPerspective {
    front: Color;
    up: Color;
    right: Color;
}
export type CubeAction = "F" | "B" | "U" | "D" | "L" | "R";

export type FaceDirection = "front" | "back" | "right" | "left" | "top" | "bottom";

export type Vector = [number, number, number];
