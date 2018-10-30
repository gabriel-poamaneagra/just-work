import { Window } from "../../../../main"
import { ITermCommander } from "./iterm.commander";
import { Position } from "../../../../main/classes/Position";
import { Size } from "../../../../main/classes/Size";
import { Desktop } from "../../../../main/classes/Desktop";
import { Pane } from "./pane";

enum Split {
    Horizontally = 'horizontally',
    Vertically = 'vertically'
}

export class ITerm {
    private windowId: string
    private commander: ITermCommander

    public static getDefaultWindow(): Window {
        const windowId = ITermCommander.run([
            'run application "iTerm"',
            'tell application "iTerm"',
            'get the id of the current window',
            'end tell'
        ])
        return new Window(Desktop.default, Position.custom(0, 0), Size.custom('0', '0'), windowId)
    }

    constructor(private window: Window) {
        this.commander = new ITermCommander()
    }

    public newTab(command: string = 'clear'): Pane {
        const tabId = this.commander.run(`
            tell window id ${this.window.id}
                create tab with default profile
            end tell
        `)

        const paneId = this.commander.run(`
            tell window id ${this.window.id}
                tell current session of current tab
                   write text "${command}"
                   get id
                end tell
            end tell
        `)

        return new Pane(tabId, paneId)
    }
}