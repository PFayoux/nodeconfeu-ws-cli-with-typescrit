import {expect, test} from '@oclif/test'

describe('github:issues', () => {
  test
    .stdout()
    .command(['github:issues'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['github:issues', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
