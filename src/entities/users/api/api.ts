import axios from 'axios'
import { AuthBodyDto } from './types'
import { redirect } from 'vike/abort'
import { ReactionType } from '#entities/reactions'

export const login = async (body: AuthBodyDto) => {
  const response = await axios.post('http://localhost:3001/api/login', body, {
    withCredentials: true,
  })
}

export const verify_token = async (cookies?: Record<string, string>) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/verify_token',
      {},
      { headers: cookies },
    )

    return response.status === 200
  } catch (error) {
    return false
  }
}
