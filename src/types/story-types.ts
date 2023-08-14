export interface Story {
  title: string
  url?: string
  time: number
  score: number
  by: string
  karma: number
  type: 'job' | 'story'
}
