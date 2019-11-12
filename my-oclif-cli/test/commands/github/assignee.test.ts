import {expect, test} from '@oclif/test'

describe('github:assignee', () => {
  test
    .stdout()
    .command(['github:assignee'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['github:assignee', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
