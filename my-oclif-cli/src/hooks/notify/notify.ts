import {Hook} from '@oclif/config'
import { IncomingWebhook } from '@slack/webhook'

const hook: Hook<'notify'> = async function ({text, url}: any) {

  process.stdout.write(`example hook running ${text} ${url}\n`)

  const webhook = new IncomingWebhook(url)

  await webhook.send({
    text: text
  })


}

export default hook
