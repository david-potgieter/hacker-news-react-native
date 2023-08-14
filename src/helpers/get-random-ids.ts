export function getRandomIds(data: number[], count: number) {
  const output = [...data]
  let n = output.length
  let t
  let i

  while (n) {
    i = Math.floor(Math.random() * n--)
    t = output[n]
    output[n] = output[i]
    output[i] = t
  }

  return output.slice(0, count)
}
