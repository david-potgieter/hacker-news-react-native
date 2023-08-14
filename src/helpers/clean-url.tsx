export function cleanUrl(url: string) {
  return url.replace(/^https?:\/\/|\/.*$/gm, '')
}
