export interface EventRanking {
  updated_at: string
  events: Array<{
    rank: number
    event_id: number
    event_url: string
    title: string
    started_at: string
    description: string
    capasity: number
    entered: number
    station: string
  }>
}
