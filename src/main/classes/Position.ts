export class Position {
    public static custom(x: number, y: number): Position {
        return new Position(x, y)
    }

    constructor(private x: number, private y: number) {
    }
}