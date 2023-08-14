/**
 * Story title
 * Story URL
 * Story timestamp
 * Story score
 * Author id
 * Author karma score
 */

export function cleanUrl(url: string) {
  return url.replace(/^https?:\/\/|\/.*$/gm, '')
}
