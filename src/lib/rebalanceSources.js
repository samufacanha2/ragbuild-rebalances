import manifest from '../../rebalances/manifest.json' with { type: 'json' }

export function forumUrlForNote(note, versions) {
  if (note.sourceUrl) return note.sourceUrl
  const version = versions.find((entry) => entry.id === note.versionId)
  if (!version) return ''
  if (note.added) {
    const changeSourceUrl = manifest.find((entry) => entry.id === note.versionId)?.changeSourceUrl
    if (changeSourceUrl) return changeSourceUrl
  }
  return version.sourceUrl || ''
}
