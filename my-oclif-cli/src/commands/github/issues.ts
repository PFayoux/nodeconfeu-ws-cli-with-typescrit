import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as chalk from 'chalk'
import Octokit = require('@octokit/rest')


export default class GithubIssues extends Command {
  static description = 'Get a list of issues'

  static flags = {
    help: flags.help({char: 'h'}),
    githubPersonalToken: flags.string({
      description: `Environment variable GITHUB_PERSONAL_TOKEN`,
      env: 'GITHUB_PERSONAL_TOKEN',
      required: true
    })
  }

  static args = [
    {
      name: 'owner',
      required: false,
      description: 'An owner of a repository',
      default: 'korzio',
    },
    {
      name: 'repo',
      required: false,
      description: 'A repository',
      default: 'note',
    },
  ]

  async run() {
    const {args, flags} = this.parse(GithubIssues)

    // Use cli.action.start to show the loader with some useful information what is happening
    cli.action.start('Getting the list of the issues')

    const octokit = new Octokit({
      auth: flags.githubPersonalToken,
    })

    const { data: issues } = await octokit.issues.listForRepo({
      owner: args.owner,
      repo: args.repo,
    })

    cli.action.stop()

    cli.table(issues, {
      number: {},
      title: {},
      assignee: {
        get: row => row.assignee ? row.assignee.login : null,
      },
      state: {
        get: row => row.state === 'open' ? chalk.green('open') : chalk.red('closed'),
      },
      html_url: {
        header: 'Link'
      },
    })
  }
}
