export interface EventRanking {
  updated_at: string
  ranking: Array<{
    rank: number
    event_id: number
    event_url: string
    title: string
    started_at: string
    description: string
    capacity: number
    entered: number
    station: string
  }>
}
