const { Window, Desktop, Position, Size } = require('../dist/just-work')
const { ITerm } = require('../dist/plugins')

const terminal = new ITerm(
    ITerm.getDefaultWindow()
)

const paneMe = terminal.newTab('cd ~/Projects/me && clear')
const paneProjects = paneMe.splitH('cd ~/Projects && clear')
const paneNh = paneMe.splitV('cd ~/Projects/nh && clear')

