#!/usr/bin/env node

import * as pkg from './package.json'

const options = process.argv.slice(2)

const VERSION_MESSAGE =`
    my-hello-world-cli ${pkg.version}
`
const HELP_MESSAGE = `
    my-hello-world-cli

    ${pkg.description}
    ${pkg.version}

    Usage:
    --help    Help documentation
    --version Installed package version
`
switch (true) {
    case options.includes('--version'):
        console.log(VERSION_MESSAGE)
        break;

    default:
        console.log(HELP_MESSAGE)
        break;
}
