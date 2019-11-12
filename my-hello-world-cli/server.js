#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pkg = __importStar(require("./package.json"));
var options = process.argv.slice(2);
var VERSION_MESSAGE = "\n    my-hello-world-cli " + pkg.version + "\n";
var HELP_MESSAGE = "\n    my-hello-world-cli\n\n    " + pkg.description + "\n    " + pkg.version + "\n\n    Usage:\n    --help    Help documentation\n    --version Installed package version\n";
switch (true) {
    case options.includes('--version'):
        console.log(VERSION_MESSAGE);
        break;
    default:
        console.log(HELP_MESSAGE);
        break;
}
