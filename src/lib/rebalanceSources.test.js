import assert from 'node:assert/strict'
import test from 'node:test'
import { forumUrlForNote } from './rebalanceSources.js'

const versions = [
  { id: 'rebalance-1', sourceUrl: 'https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805' },
  { id: 'rebalance-5', sourceUrl: 'https://www.divine-pride.net/forum/index.php?/topic/7814-kro-27560-level-expansion-and-new-skills/' },
]

test('patch notes link to the specific version forum comment', () => {
  assert.equal(forumUrlForNote({ versionId: 'rebalance-1' }, versions), versions[0].sourceUrl)
})

test('new skills link to the follow-up comment, not the broad expansion topic', () => {
  assert.equal(forumUrlForNote({ versionId: 'rebalance-5', added: true }, versions),
    'https://www.divine-pride.net/forum/index.php?/topic/7814-kro-27560-level-expansion-and-new-skills/&do=findComment&comment=14820')
})

test('unknown versions do not invent forum links', () => {
  assert.equal(forumUrlForNote({ versionId: 'missing' }, versions), '')
})
