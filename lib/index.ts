import axios from 'axios'
import { EventRanking } from './types'

const API_ENDPOINT = 'https://api.techplay.jp/v1'

class Client {
  private token: string
  constructor({ token }: { token: string }) {
    this.token = token
  }

  public async getEventRanking(): Promise<EventRanking> {
    const url = `${API_ENDPOINT}/ranking/event?token=${this.token}`
    const { data } = await axios.get(url)
    return data
  }
}

export { Client }
