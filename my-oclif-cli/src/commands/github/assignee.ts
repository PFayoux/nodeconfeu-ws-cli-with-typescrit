import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as chalk from 'chalk'
import Octokit = require('@octokit/rest')
import * as inquirer from 'inquirer'

export default class GithubAssignee extends Command {
  static description = 'describe the command here'

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
    const {args, flags} = this.parse(GithubAssignee)

    let responses: any = await inquirer.prompt([{
      name: 'isStartIssue',
      message: 'Do you want to start working on an issue? (Y/n) :',
      type: 'list',
      choices: [{name: 'Y'}, {name: 'n'}],
    }])

    if (responses.isStartIssue === 'Y') {
      const issueNumber = await cli.prompt('Which issue you want to pick up? Please provide the ID :')

      this.log(`Working on issue : ${issueNumber}`)

      const assignee = await cli.prompt('What is your GitHub login? :')

      this.log(`Hello ${assignee} !`)

      // Use cli.action.start to show the loader with some useful information what is happening
      cli.action.start('Getting the list of the issues')

      const octokit = new Octokit({
        auth: flags.githubPersonalToken,
      })

      await octokit.issues.update({
        owner: args.owner,
        repo: args.repo,
        issue_number: issueNumber,
        assignees: [assignee]
      })

      cli.action.stop()

      this.log(`Assignee of the issue #${issueNumber} has been successfully changed to "${assignee}"!`)

    } else {
      this.log('This program will terminate')
    }

    

  }
}
