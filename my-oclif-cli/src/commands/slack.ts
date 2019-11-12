import {Command, flags} from '@oclif/command'
import { IncomingWebhook } from '@slack/webhook'

export default class Slack extends Command {
  static description = 'Send a message to a channel in Slack'

  static flags = {
    help: flags.help({
      char: 'h'
    }),
    slackWebhookUrl: flags.string({
      env: 'SLACK_WEBHOOK_URL',
      required: true
    })
  }

  static args = [
    {
      name: 'text',
      required: true     
    }
  ]

  async run() {
    const {args, flags} = this.parse(Slack)

    const webhook = new IncomingWebhook(flags.slackWebhookUrl)

    await webhook.send({
      text: args.text
    })
  }
}
