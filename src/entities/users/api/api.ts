import axios from 'axios'
import { AuthBodyDto } from './types'
import { redirect } from 'vike/abort'

export const login = async (body: AuthBodyDto) => {
  const response = await axios.post('http://localhost:3001/api/login', body, {
    withCredentials: true,
  })

  if (response.status === 200) throw redirect('/')
}

export const verify_token = async () => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/verify_token',
      {},
      { withCredentials: true },
    )

    return response.status === 200
  } catch (error) {
    console.log(error)
    return false
  }
}
