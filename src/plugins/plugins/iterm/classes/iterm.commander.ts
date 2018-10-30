import { Commander } from "../../../../main"

export class ITermCommander extends Commander {
    constructor() {
        super(['tell application "iTerm"'], ['end tell'])
    }
}