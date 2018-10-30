export class Size {
    public static custom(width: string, height: string): Size {
        return new Size(width, height)
    }

    constructor(private width: string, private height: string) {}
}