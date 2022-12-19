import {expect, test} from '@oclif/test'

describe('dotdigital', () => {
  test
  .stdout()
  .command(['dotdigital'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['dotdigital', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
