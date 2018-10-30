import {Position} from "./Position"
import {Size} from "./Size";


export class Window {
    constructor(private window: string, private position: Position, private size: Size, public id?: string) {
    }
}