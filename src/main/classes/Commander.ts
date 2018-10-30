import { spawnSync } from 'child_process'

export class Commander {
    public static run(lines: string[]) {
        const args = lines.filter(line => line.length).reduce((acc, line) => {
            acc.push('-e')
            acc.push(line)

            return acc
        }, [])

        const response = spawnSync('osascript', args)

        if (response.status) {
            const message = response.stderr.toString()
            throw new Error(message)
        } else {
            return response.stdout.toString().trim()
        }
    }

    constructor(private commandsPrefix: string[], private commandsSuffix: string[]) {
    }

    public run(command: string): string {
        const lines = [
            ...this.commandsPrefix,
            ...command.split(/\r?\n/).map(line => line.trim()),
            ...this.commandsSuffix
        ]

        return Commander.run(lines)
    }
}