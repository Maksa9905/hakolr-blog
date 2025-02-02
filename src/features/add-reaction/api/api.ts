import axios from 'axios'
import { AddReactionBody } from './types'

export const add_reaction = async (
  body: AddReactionBody,
  cookies?: Record<string, string>,
) => {
  const response = await axios.post(
    'http://localhost:3001/api/reactions',
    body,
    { headers: cookies },
  )
}
