import { Window } from "../../../../main"
import { ITermCommander } from "./iterm.commander";

enum Split {
    Horizontally = 'horizontally',
    Vertically = 'vertically'
}

export class Pane {
    private commander: ITermCommander

    constructor(private tabId: string, private id: string) {
        this.commander = new ITermCommander()
    }

    public splitV(command: string = 'clear'): Pane {
        this.split(command, Split.Vertically)
        return this
    }

    public splitH(command: string = 'clear'): Pane {
        this.split(command, Split.Horizontally)
        return this
    }

    private split(command: string, split: Split): void {
        const paneId = this.commander.run(`
            tell session id "${this.id}" of ${this.tabId}
                return unique id of (split ${split} with default profile)
            end tell
        `)
    }
}