import axios from 'axios'

export const subscribe = async (
  userId: string,
  cookies?: Record<string, string>,
) => {
  const response = await axios.post(
    `http://localhost:3001/api/user/subscribe/${userId}`,
    {},
    { headers: cookies, method: 'POST' },
  )

  return response
}

export const unsubscribe = async (
  userId: string,
  cookies?: Record<string, string>,
) => {
  const response = await axios.delete(
    `http://localhost:3001/api/user/subscribe/${userId}`,
    { headers: cookies, method: 'DELETE' },
  )

  return response
}
