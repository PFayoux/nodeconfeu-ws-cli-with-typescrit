my-oclif-cli
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-oclif-cli.svg)](https://npmjs.org/package/my-oclif-cli)
[![Downloads/week](https://img.shields.io/npm/dw/my-oclif-cli.svg)](https://npmjs.org/package/my-oclif-cli)
[![License](https://img.shields.io/npm/l/my-oclif-cli.svg)](https://github.com/PFayoux/my-oclif-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-oclif-cli
$ my-oclif-cli COMMAND
running command...
$ my-oclif-cli (-v|--version|version)
my-oclif-cli/0.0.0 linux-x64 node-v12.13.0
$ my-oclif-cli --help [COMMAND]
USAGE
  $ my-oclif-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-oclif-cli github:issues [FILE]`](#my-oclif-cli-githubissues-file)
* [`my-oclif-cli hello [FILE]`](#my-oclif-cli-hello-file)
* [`my-oclif-cli help [COMMAND]`](#my-oclif-cli-help-command)
* [`my-oclif-cli slack TEXT`](#my-oclif-cli-slack-text)

## `my-oclif-cli github:issues [FILE]`

describe the command here

```
USAGE
  $ my-oclif-cli github:issues [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/github/issues.ts](https://github.com/PFayoux/my-oclif-cli/blob/v0.0.0/src/commands/github/issues.ts)_

## `my-oclif-cli hello [FILE]`

describe the command here

```
USAGE
  $ my-oclif-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-oclif-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/PFayoux/my-oclif-cli/blob/v0.0.0/src/commands/hello.ts)_

## `my-oclif-cli help [COMMAND]`

display help for my-oclif-cli

```
USAGE
  $ my-oclif-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `my-oclif-cli slack TEXT`

Send a message to a channel in Slack

```
USAGE
  $ my-oclif-cli slack TEXT

OPTIONS
  -h, --help                         show CLI help
  --slackWebhookUrl=slackWebhookUrl  (required)
```

_See code: [src/commands/slack.ts](https://github.com/PFayoux/my-oclif-cli/blob/v0.0.0/src/commands/slack.ts)_
<!-- commandsstop -->
